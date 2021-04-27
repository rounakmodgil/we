import React,{useState, useRef} from 'react'
import { View, StyleSheet, Text, ScrollView, Button,  Picker, TextInput, TouchableWithoutFeedback, TouchableNativeFeedback, ImageBackground } from "react-native";
import {Formik} from 'formik';
import RBSheet from "react-native-raw-bottom-sheet";
import ImagePicker from 'react-native-image-crop-picker';
const App = () => {
  
const uploadfromlib=()=>{
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true
  }).then(image => {
    console.log(image);
    setImagePath(image.path)
    refRBSheet.current.close();
  });
}
const uploadfromcamera=()=>{
  ImagePicker.openCamera({
    width: 300,
    height: 400,
    cropping: true,
  }).then(image => {
    console.log(image);
    setImagePath(image.path)
    refRBSheet.current.close();
  });
}
const [image, setImagePath]=useState(null);
const [selectedValue, setSelectedValue] = useState("Oxygen Cylinde");
const refRBSheet = useRef();

return (
  <View >    
    <ScrollView>

<View style={styles.logincontainer}>
    <Text>Please Help us with any legit information</Text>
  <Formik
    initialValues={{email: '', description: ''}}
    onSubmit={async (values) => {
     ()=>console.log(values)
    }}>
    {({handleChange, handleBlur, handleSubmit, values}) => (
      <View>
          <View style={{flexDirection:"row", justifyContent:"center"}}>
             <Picker
      selectedValue={selectedValue}
      style={{ height: 50, width: 150 }}
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
    <TouchableWithoutFeedback onPress={() => refRBSheet.current.open()}>
    <View style={styles.uploadphoto}>{image!=null && <ImageBackground source={{uri:image}} style={{flex:1}}></ImageBackground>}{image===null &&<Text>weee</Text>}</View></TouchableWithoutFeedback>
        <TextInput
        style={styles.logintextinput}
          onChangeText={handleChange('description')}
          onBlur={handleBlur('description')}
          placeholder="Add a Description"
          textContentType="text"
          value={values.description}
        />   
        <View style={styles.loginbuttoncontainer}>
        <Button title="Post" />   
        </View>
       
      </View>
    )}
  </Formik>
  </View>
<RBSheet
ref={refRBSheet}
closeOnDragDown={true}
closeOnPressMask={true}
customStyles={{
wrapper: {
  backgroundColor: "transparent"
},
draggableIcon: {
  backgroundColor: "#000"
}
}}
>
<View>
<TouchableWithoutFeedback onPress={uploadfromlib}>
<View style={{flexDirection:"row", padding:10}}><Text>Upload from Gallery</Text></View>
</TouchableWithoutFeedback>
<TouchableNativeFeedback onPress={uploadfromcamera}>
<View style={{flexDirection:"row", padding:10}}><Text>Take a photo</Text></View>
</TouchableNativeFeedback>
<View style={{flexDirection:"row", padding:10}}><Text>Cancel</Text></View>
</View>
</RBSheet> 
</ScrollView>
  </View>
);
}
const styles = StyleSheet.create({
  logincontainer:{
    flex:1,
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
  },
  uploadphoto:{
    width:"100%",
    height:400,
    backgroundColor:"gray"
  }
});

export default App