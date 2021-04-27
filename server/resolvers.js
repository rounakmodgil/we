const { Users } = require("./models/User");
const { hash, compare } = require("bcryptjs");
const { createAccessToken, createRefeshToken } = require("./auth");
const { sendRefreshToken } = require("./sendRefreshToken");
const { getcurrUser, setCurrUser } = require("./currUser");

const resolvers = {
  Query: {
    hello: () => "wassap",
    users: () => Users.find(),
    user: (_, { id }) => Users.findById(id),
    bye: () => {
      return "bye";
    },
    me: () => getcurrUser(),
  },
  Mutation: {
    createUser: async (_, { email, password }) => {
      const hashedPassword = await hash(password, 12);
      const User = new Users({name, phone,  email, password: hashedPassword });
      try {
        await User.save();
      } catch (err) {
        console.log(err);
        return false;
      }
      return true;
    },

    login: async (_, { email, password }, { res }) => {
      const User = await Users.findOne({ email: email });
      if (!User) {
        throw new Error("could not find the user");
      }
      const valid = await compare(password, User.password);
      if (!valid) {
        throw new Error("bad password");
      }

      //login succesfull
      setCurrUser(User.id);
      sendRefreshToken(res, createRefeshToken(User));
      return { accessToken: createAccessToken(User), user: User };
    },
    logout: async (_, {}, { res }) => {
      console.log(res);
      sendRefreshToken(res, " ");
      return true;
    },

    revokeRefreshToken: async (_, { userId }) => {
      const User = await Users.findByIdAndUpdate(userId, {
        $inc: { tokenVersion: 1 },
      });
      if (!User) {
        throw new Error("could not find the user");
      }
      return true;
    },
    savepictureurl: async (parent, { id, profilepictureurl }) => {
      const User = await Users.findById(id);
      const key = User.profileimageurl.slice(35);
      if (key != "") {
        const s3 = new aws.S3({
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
          region: "us-east-2",
        });
        console.log(key);
        await s3.deleteObject(
          {
            Bucket: s3Bucket,
            Key: key,
          },
          async function (err, data) {
            if (err) {
              console.log(err);
              return false;
            }
            if (data) {
              await Users.findByIdAndUpdate(id, {
                $set: {
                  profileimageurl: "",
                },
              });
              const res = await Users.findByIdAndUpdate(id, {
                $set: {
                  profileimageurl: profilepictureurl,
                },
              });
              if (res) {
                return true;
              }
              throw new Error("Something went wrong");
            }
          }
        );
        return false;
      }

      const res = await Users.findByIdAndUpdate(id, {
        $set: {
          profileimageurl: profilepictureurl,
        },
      });
      if (res) {
        console.log(profilepictureurl);
        return true;
      }
      throw new Error("Something went wrong");
    },
    signS3: async (parent, { filename, filetype }) => {
      // AWS_ACCESS_KEY_ID
      // AWS_SECRET_ACCESS_KEY
      const s3 = new aws.S3({
        signatureVersion: "v4",
        region: "us-east-2",
      });

      const s3Params = {
        Bucket: s3Bucket,
        Key: filename,
        Expires: 60,
        ContentType: filetype,
        ACL: "public-read",
      };

      const signedRequest = await s3.getSignedUrl("putObject", s3Params);
      const url = `https://${s3Bucket}.s3.amazonaws.com/${filename}`;
      return {
        signedRequest,
        url,
      };
    },
  },
};
module.exports = { resolvers };

