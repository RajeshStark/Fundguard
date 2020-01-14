import React,{Component} from 'react';
import axios from 'axios';

import {
    View,Text, StyleSheet,
    Image,Linking, Alert,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { Container,Header, Content, Body, Left, Right,Footer, Card, FooterTab, Button,Fab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import OptionsMenu from "react-native-options-menu";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {NavigationActions} from 'react-navigation';
import DocumentPicker from 'react-native-document-picker';
import FilePickerManager from 'react-native-file-picker';


import Test from './test';
import Costumers from './Costumer';
import Greetings from './CallLogs';
import Address from './Greetings/Addressbook';
import AddProspect from './AddProspect';



var RNFS = require('react-native-fs');

const MoreIcon = require("../../assets/images/dots-vertical.png");

 class IndexC extends React.Component{

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
      active: false,
      singleFile: '',
      title: '',
      content: '',
      image: null
    };
  }



//Picker Submitting


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
  toUrl:'http://pramod.freevar.com/Project/upload_image.php',
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
           'User Added' 
        )
     }
      const {navigate} = this.props.navigation; 

        return(
            <Container>
           

              <Header style={{ backgroundColor: '#FBC707'}}>
                  <Left>
                  <Icon name='bars' style={{fontSize:20, padding:10}}
                  onPress={() => this.props.navigation.openDrawer()} 
                  />
                 </Left>
                 <Body style={{alignItems:'center'}}>
                   <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center', alignContent:'center'}}>
                 <Image 
                     style={{width:30, height:50, marginLeft: -30}}
                    source={require('../../assets/images/flogo.jpg')}
                     />
                     <Text style={{fontSize:18, marginLeft: 20}}>
                       FundGuard
                     </Text>
                   </View>
                 </Body>
                 <Right>
                 <OptionsMenu
                    button={MoreIcon}
                    buttonStyle={{ width: 32, height: 30, margin: 7.5, resizeMode: "contain" }}
                    destructiveIndex={1}
                    options={["Edit Profile", "Log Out"]}
                    actions={[this.navigateToScreen('EditProfile'), this.deletePost]}/>
                   
                 </Right>
                  </Header>
              
                  <ScrollView>
                      <View>
         
                          <Content padder>
                              <View style={{justifyContent:'space-around',alignItems:'center',flexDirection:'row',}}>
                                  <Text style={{fontSize:24}}>prospect Details</Text>
                              </View>

        <Text style={styles.textStyle}>
          File Name:{' '} 
          {this.state.singleFile.name ? this.state.singleFile.name : ''}
          {'\n'}
          Type: {this.state.singleFile.type ? this.state.singleFile.type : ''}
          {'\n'}
          File Size:{' '}
          {this.state.singleFile.size ? this.state.singleFile.size : ''}
          {'\n'}
          URI: {this.state.singleFile.uri ? this.state.singleFile.uri : ''}
          {'\n'}
        </Text> 

        
         <Text
          onPress={()=> this.handleSubmit()}
        > Submit </Text>

        
                              <Test/>

                          </Content>
         
                      </View>
                  </ScrollView>
      <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF', marginBottom: 50 }} // #5067FF
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="plus" />
            <Button style={{ backgroundColor: '#5067FF', marginBottom: 50 }}>
            <Icon name="user-plus" style={{fontSize:18,color:'#fff'}}  
                  // onPress={this.navigateToScreen('AddProspect')}
                    onPress={this.navigateToScreen('AddProspect')}
            />
            </Button>
            <Button style={{ backgroundColor: '#5067FF', marginBottom: 50 }}>
            <Icon name="file-excel" style={{fontSize:20,color:'#fff'}}
                   onPress={this.selectOneFile.bind(this)}
            />
            </Button>
          </Fab>
                    <Footer>
                      <FooterTab style={{backgroundColor:"#5183ef"}}>
                        <Button style={{backgroundColor:''}}>
                          <Icon name="globe" style={{fontSize:18, color:'#fff'}}/>
                          <Text style={{fontSize:18, color:'#fff'}}>prospect</Text>
                        </Button>
                        <Button vertical
                          onPress={() => navigate('Costumers')}
                          // onPress={() => navigate('Address')}
                        >
                          <Icon name="users" style={{fontSize:18}}/>
                          <Text style={{fontSize:18}}>Customers</Text>
                        </Button>
                        <Button vertical
                        onPress={() => navigate('Greetings')}>
                          <Icon name="phone" style={{fontSize:18}}/>
                          <Text style={{fontSize:18}}>Call Manage</Text>
                        </Button>
                      </FooterTab>
        </Footer>
 
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    
    imageViewContainer: {
    width: 300,
    height: 100 ,
    margin: 10,
    borderRadius : 10
    },
    
    textViewContainer: {
      textAlignVertical:'center',
      width:100, 
      padding:20
    
    }
    
    });

    const MainNavigator = createStackNavigator({
      IndexC: {
        screen: IndexC,
        navigationOptions: {
          header: null //this will hide the header
        },
      },
    
      
       Costumers : {
        screen: Costumers,
        navigationOptions: {
          header: null //this will hide the header
        },
      },
    
    
      Greetings : {
        screen: Greetings,
        navigationOptions: {
          header: null //this will hide the header
        },
      },

    });
    
    const MainTab = createAppContainer(MainNavigator);
    
    export default MainTab;