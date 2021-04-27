import React from 'react';
import {View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback, ScrollView} from 'react-native';
import {Formik} from 'formik';
import {register} from '../Graphql/gql';
import {useMutation} from '@apollo/react-hooks';

export default function Signup({navigation}) {
  const [usercreate, res] = useMutation(register);
  return (
    <View style={styles.signupcontainer}>
    <Formik
      initialValues={{name:'',email: '', password: '', phone:''}}
      onSubmit={async (values) => {
        await usercreate({
          variables: {name:values.name, phone:values.phone, email: values.email, password: values.password},
        });
        navigation.navigate('home');
        if (res) console.log(res);
      }}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <ScrollView>
          <TextInput
          style={styles.signuptextinput}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            placeholder="Name"
            textContentType="name"
            value={values.name}
          />
          <TextInput
            style={styles.signuptextinput}
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            placeholder="Phone Number"
            textContentType="phone"
            value={values.phone}
          />
          <TextInput
          style={styles.signuptextinput}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            placeholder="Email"
            textContentType="emailAddress"
            value={values.email}
          />
          <TextInput
          style={styles.signuptextinput}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            placeholder="Password"
            textContentType="password"
            value={values.password}
          />
          <View style={styles.signupbuttoncontainer}>
          <Button onPress={handleSubmit} title="Signup" />
          </View>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('login')}>
          <View style={styles.signupnewuser}>
            <Text>Already a user? please login</Text>        
          </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      )}
    </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  signupcontainer:{
    flex:1,
    width:400,
    justifyContent:'center',
  },
  signuptextinput:{
    margin:10,
     width:380, 
     backgroundColor:'#E0E5EB'
  },
  signupbuttoncontainer:{
    width:380,
    margin:10
  },
  signupnewuser:{
    flexDirection:"row", 
    justifyContent:'center'
  }

});