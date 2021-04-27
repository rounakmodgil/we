import React, {useState, useCallback} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Linking , Image, TouchableWithoutFeedback} from 'react-native'



const Post = ({
  index,
  postId,
  userId,
  gender,
  description,
  author,
  category,
  created,
  imgurl,
  votes,
  deleteButton,
  deletePost
}) => {


const [textShown, setTextShown] = useState(false); //To show ur remaining Text
const [lengthMore,setLengthMore] = useState(false); //to show the "Read more & Less Line"
const [votestate, setVoteState]=useState(votes);
const toggleNumberOfLines = () => { //To toggle the show text or hide it
    setTextShown(!textShown);
}

const onTextLayout = useCallback(e =>{
    setLengthMore(e.nativeEvent.lines.length >=4); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
},[]);

const upvote=()=>{
  setVoteState(votes+1)
  console.log(votestate)
}
const downvote=()=>{
  setVoteState(votes-1)
  console.log(votestate)
}
  return (
   <View style={styles.container}>
        <View style={styles.headerContainer}>
            <View style={styles.userimagecontainer}>
           
            </View>
            <View><Text>Ankit Kumar</Text>
            <Text>12:30PM, 23 April 2020</Text></View>
        </View>
     <View style={styles.postcontainer}> 
     <Image
        style={{height:"100%", width:"100%"}}
        source={{
          uri: 'https://picsum.photos/200/300',
        }}
      />
     </View>
     <View style={styles.footerContainer}>
        <View style={styles.footerSubContainer}>
          <View style={{flexDirection:"row"}}>
            <TouchableWithoutFeedback onPress={upvote}>
            <Text>u</Text>
            </TouchableWithoutFeedback>
            <Text style={{marginRight:10}}>{votestate} </Text>
            <TouchableWithoutFeedback onPress={downvote}>
            <Text>d</Text>
            </TouchableWithoutFeedback>
          </View>
          <View>
            <Text>Bookmark</Text>
          </View>
        </View>
        <View style={{marginTop:10}}>
        <Text
              onTextLayout={onTextLayout}
              numberOfLines={textShown ? undefined : 2}
              style={{ lineHeight: 21 }}>{description}</Text>

              {
                  lengthMore ? <Text
                  onPress={toggleNumberOfLines}
                  style={{ lineHeight: 21, marginTop: 10 }}>{textShown ? 'Read less...' : 'Read more...'}</Text>
                  :null
              }
            
           
        </View>
     </View>
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 7,
    marginVertical: 7,
    elevation: 1,
    backgroundColor:"#fff"

  },
  userimagecontainer:{
    height:40,
    width:40,
    borderRadius:20,
    marginRight:10,
    backgroundColor:"tomato"
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 7,
    fontSize: 13
  },
  postcontainer:{
    height:400,
    width:"100%",
    backgroundColor:"blue"
  },
  footerSubContainer:{
    flexDirection: 'row',
    justifyContent:"space-between"
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerRight: {},
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12
  },
  centerAlign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 17,
    fontFamily: 'OpenSans-Bold'
  },
  score: {
    marginHorizontal: 5,
    fontFamily: 'OpenSans-SemiBold'
  },
  commentIcon: {
    marginBottom: -3
  },
  commentText: {
    marginLeft: 3,
    fontFamily: 'OpenSans-SemiBold'
  },
  regularFont: {
    fontFamily: 'OpenSans-Regular'
  },
  italicFont: {
    fontFamily: 'OpenSans-Italic'
  },
  dateText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 12
  },
  link: {
    color: '#0064bd',
    fontWeight: 'bold'
  }
})

export default Post