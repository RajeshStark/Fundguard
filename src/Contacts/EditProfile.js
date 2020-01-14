import React,{Component} from 'react';
import axios from 'axios';

import {
    View,Text, StyleSheet,
    Image,Linking, Alert,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { Container,Header, Content, Body, Left, Right,Footer, Card, FooterTab, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import OptionsMenu from "react-native-options-menu";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {NavigationActions} from 'react-navigation';
import DocumentPicker from 'react-native-document-picker';
import FilePickerManager from 'react-native-file-picker';



var RNFS = require('react-native-fs');



export default class EditProfile extends React.Component{
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
      }

  constructor(props) {
    super(props);
    //Initialization of the state to store the selected file related attribute
   
    this.state = {
      singleFile: '',
      title: '',
      content: '',
      image: null
    };
  }



// django formdata code


 handleSubmit = () => {
  // e.preventDefault();
  // Alert(this.state);
  // let form_data = new FormData();
  // // form_data.append('image', this.state.image, this.state.image.name);
  // form_data.append('title', res.name);
  // form_data.append('content', res.uri);
  // let url = 'http://localhost:8000/api/posts/';
  // axios.post(url, form_data, {
  //   headers: {
  //     'content-type': 'multipart/form-data'
  //   }
  // })
  //     .then(res => {
  //     Alert(res.data);
  //     })
  //     .catch(err =>Alert(err))

  let url = this.state.singleFile.uri; //The url you received from the DocumentPicker
 
// I STRONGLY RECOMMEND ADDING A SMALL SETTIMEOUT before uploading the url you just got.
const split = url.split('/');
const name = split.pop();
const inbox = split.pop();
const realPath = `${RNFS.TemporaryDirectoryPath}${inbox}/${name}`;
 
var files = [
  {
    name: this.state.singleFile.name ,
    filename: this.state.singleFile.name ,
    filepath: RNFS.DocumentDirectoryPath + '/test1.w4a',
    filetype: this.state.singleFile.type
  }
];

const uploadBegin = (response) => {
  const jobId = response.jobId;
  console.log('UPLOAD HAS BEGUN! JobId: ' + jobId);
};
 
const uploadProgress = (response) => {
  const percentage = Math.floor((response.totalBytesSent/response.totalBytesExpectedToSend) * 100);
  console.log('UPLOAD IS ' + percentage + '% DONE!');
};
 
RNFS.uploadFiles({
  toUrl:'http://pramod.freevar.com/userregistration/getyourquote.php',
  files: files,
  method: 'POST',
  headers: {
    'Accept': 'application/json',
  },
  fields: {
    'hello': 'world',
  },
  begin: uploadBegin,
  progress: uploadProgress
}).promise.then((response) => {
    if (response.statusCode == 200) {
      console.log('FILES UPLOADED!'); // response.statusCode, response.headers, response.body
    } else {
      console.log('SERVER ERROR');
    }
  })
  .catch((err) => {
    if(err.description === "cancelled") {
      // cancelled by user
    }
    console.log(err);
  });


}; 





  async selectOneFile() {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
       
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      this.setState({ singleFile: res });
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('You Have Not Selected Any File');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  }

  

  

    render(){

        const showAlert = () =>{
            Alert.alert(
               'Your Profile Saved Successfully' 
            )
         }
        return(
            <Container>
                
                  <Header style={styles.header}>
                  <Left>
                  <Icon name='arrow-left' style={{fontSize:20,marginLeft:10,padding:10}}
                  onPress={this.navigateToScreen('IndexC')} 
                  />
                 </Left>
                 <Body>
                     <Text style={{fontSize:18}}>Edit Your Profile</Text>
                 </Body>
                 <Right>
                 <Icon name='check' style={{fontSize:20, fontWeight:100,marginRight:10, padding:10}} 
                  onPress={showAlert}
                  />
                 </Right>
                  </Header>
                  <ScrollView>
                      <View>
                          <Content padder>
                              <View style={{justifyContent:'space-around',alignItems:'center',flexDirection:'row',}}>
                                  <Text style={{fontSize:24}}>Edit Your Details</Text>
                              </View>


                          </Content>
                      </View>
                  </ScrollView>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    
   header: {
       backgroundColor: '#fff',

   }
    
    });

    