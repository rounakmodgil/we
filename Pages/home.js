import React, { useState } from "react";
import { View, StyleSheet, Button , Picker} from "react-native";
import {Formik} from 'formik';

const Home = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState("Oxygen Cylinder");
  const [state, setState] = useState("Telangana");
  return (
    <View >
    <Formik
      initialValues={{email: '', description: ''}}
      onSubmit={
      //   async (values) => {
      //   const res = await userlogin({
      //     variables: {email: values.email, password: values.password},
      //   });
      //   if (res) {
      //     setAccessToken(res.data.login.accessToken);      
      //   }
      //   navigation.navigate('explore');
      // }
      ()=>navigation.navigate('explore')
      }>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        
        <View >
          <View style={{flexDirection:"row", justifyContent:"center", margin:10}}>
            <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150, marginLeft:30 }}
        onValueChange={(itemValue, itemIndex) => setState(itemValue)}
      >
        <Picker.Item label="Hyderabad" value="Hyderabad" />
        <Picker.Item label="Hyderabad" value="Hyderabad" />
        <Picker.Item label="Hyderabad" value="Hyderabad" />

   
      </Picker>
      </View>
          <View style={{flexDirection:"row", justifyContent:"center", margin:10}}>
            <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 ,  marginLeft:30}}
        onValueChange={(itemValue, itemIndex) => setState(itemValue)}
      >
        <Picker.Item label="Telangana" value="telangana" />
        <Picker.Item label="Telangana" value="telangana" />
        <Picker.Item label="Telangana" value="telangana" />
   
      </Picker>
      </View>
            <View style={{flexDirection:"row", justifyContent:"center", margin:10}}>
            <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150,  marginLeft:30 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Oxygen Cylinder" value="oxygen_cylinder" />
        <Picker.Item label="Plasma" value="plasma" />
        <Picker.Item label="Normal Beds" value="normal_beds" />
        <Picker.Item label="ICU Beds" value="icu_beds" />
        <Picker.Item label="Remdesivir" value="remdesivir" />
        <Picker.Item label="FabiFlu" value="fabiflu" />
        <Picker.Item label="Ventilator" value="ventilator" />
      </Picker></View>

          <View style={styles.loginbuttoncontainer}>
          <Button   onPress={handleSubmit} title="Search" />   
          </View>      
        </View>
      )}
    </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});

export default Home;