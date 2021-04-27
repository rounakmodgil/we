import React from 'react';
import {View, SafeAreaView, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
} from 'react-native-paper';



const ProfileScreen = () => {

  // const myCustomShare = async() => {

  //   try {
  //     const ShareResponse = await Share.open(shareOptions);
  //     console.log(JSON.stringify(ShareResponse));
  //   } catch(error) {
  //     console.log('Error => ', error);
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
      
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>John Doe</Title>
            <Caption style={styles.caption}>@j_doe</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
<View style={styles.row}>
 
  <Text style={{color:"#777777", marginLeft: 20}}>Kolkata, India</Text>
</View>
<View style={styles.row}>
 
  <Text style={{color:"#777777", marginLeft: 20}}>+91-900000009</Text>
</View>
<View style={styles.row}>
 
  <Text style={{color:"#777777", marginLeft: 20}}>john_doe@email.com</Text>
</View>
</View>
<View>
<View style={{flexDirection:"row", margin:10}}><Text>Profile Settings</Text></View>
  <View style={{flexDirection:"row", margin:10}}><Text>Saved Posts</Text></View>
  <View style={{flexDirection:"row", margin:10}}><Text>Your Posts</Text></View>
  <View style={{flexDirection:"row", margin:10}}><Text>Logout</Text></View>
</View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});





 