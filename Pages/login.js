import React from 'react';
import {View, Text, TextInput, Button, StyleSheet, StatusBar, TouchableWithoutFeedback} from 'react-native';
import {Formik} from 'formik';
import {login} from '../Graphql/gql';
import {useMutation} from '@apollo/react-hooks';
import {setAccessToken} from './accessToke';

export default function Signup({navigation}) {
  const [userlogin] = useMutation(login);
  return (
    <View style={styles.logincontainer}>
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={async (values) => {
        const res = await userlogin({
          variables: {email: values.email, password: values.password},
        });
        if (res) {
          setAccessToken(res.data.login.accessToken);
          
        }
        navigation.navigate('home');
      }}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View>
          <TextInput
          style={styles.logintextinput}
            required
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            placeholder="email"
            textContentType="emailAddress"
            value={values.email}
          />
          <TextInput
          style={styles.logintextinput}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            placeholder="password"
            textContentType="password"
            value={values.password}
          />
          <View style={styles.loginbuttoncontainer}>
          <Button   onPress={handleSubmit} title="Login" />   
          </View>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('signup')}>
          <View style={styles.loginnewuser}>
          <Text > New User? Please Signup</Text>
          </View>
          </TouchableWithoutFeedback>
        </View>
      )}
    </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  logincontainer:{
    flex:1,
    width:400,
    justifyContent:'center',
  },
  logintextinput:{
    margin:10,
     width:380, 
     backgroundColor:'#E0E5EB'
  },
  loginbuttoncontainer:{
    width:380,
    margin:10
  },
  loginnewuser:{
    flexDirection:"row", 
    justifyContent:'center'
  }

});