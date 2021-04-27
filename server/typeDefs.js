const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello: String
    bye: String
    users: [User!]!
    user(id: ID!): User!
    me: ID
  }
  type User {
    id: ID!
    email: String!
    password: String!
    tokenVersion: Int!
  }
  type LoginResponse {
    accessToken: String!
    user: User!
  }
  type S3Payload {
    signedRequest: String!
    url: String!
  }
  type Mutation {
    createUser(name:String!, phone:String!, email: String!, password: String!): Boolean!
    login(email: String!, password: String!): LoginResponse
    revokeRefreshToken(userId: String!): Boolean!
    logout: Boolean!
    signS3(filename: String!, filetype: String!): S3Payload!
    savepictureurl(profilepictureurl: String!, id: String!): Boolean!
  }
`;
module.exports = { typeDefs };
