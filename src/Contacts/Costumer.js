import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Linking,Alert,Image  } from 'react-native';
import { Container,Header, Content, Body, Left, Right,Footer, Card, FooterTab, Button,Fab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import OptionsMenu from "react-native-options-menu";
import {NavigationActions} from 'react-navigation';
import DocumentPicker from 'react-native-document-picker';

const MoreIcon = require("../../assets/images/dots-vertical.png");


export default class Costumers extends React.Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }


  constructor(props){
    super(props);
    this.state = { 
      isLoading: true,
      active: false,
      singleFile: '',
      title: '',
      content: '',
      image: null
    }
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


  componentDidMount(){
    return fetch('http://rajesh.orgfree.com/something.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    const {navigate} = this.props.navigation;

    const showAlert = () =>{
        Alert.alert(
           'User Added' 
        )
     }



    if(this.state.isLoading){
      return(
        <View>
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
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1}}>
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
                  <Content padder>
                    <View style={{justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
                        <Text style={{fontSize:24}}>Costumers Details</Text>
                        {/* <Icon name='file-upload' style={{fontSize:24}}/>
                          <Icon name='file-excel' style={{fontSize:24}}/> */}
                    </View>
        <FlatList
          data={this.state.dataSource}
    renderItem={({item}) => 
    <View>
                        <Card >
                                 <View style={{margin:5}}>
                                  <Text style={{fontSize:18}}>
                                  Name: {item.name}{"\n"}Phone: {item.no}{"\n"}E-mail: {item.email}{"\n"}City: {item.city}
                                  </Text>
                                 </View> 
                                 <View style={{flexDirection:'row',justifyContent:'space-around',marginBottom:10}}>
                                     <Icon name='phone' style={{fontSize:18}}
                                          onPress={()=>{Linking.openURL('tel:'+(item.no));}} 
                                     />
                                     <Icon name='sms' style={{fontSize:18}}
                                       onPress={()=>{Linking.openURL('smsto:'+(item.no));}} 
                                     />
                                     <Icon name="envelope" style={{fontSize:18}}
                                      onPress={() => {
                                        Linking.openURL('mailto:'+(item.email));}}/>
                                     <Icon name='whatsapp' style={{fontSize:18}}
                                     onPress={() => {
                                        Linking.openURL('https://api.whatsapp.com/send?phone='+(item.no));}}/>
                              
                                     <Icon name='edit' style={{fontSize:18}}/>
                                     <Icon name='trash' style={{fontSize:18}}/> 
                                 </View> 
                              </Card> 
                           
    </View>
    }
          keyExtractor={({id}, index) => id}
        />
        </Content>

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
                  onPress={this.navigateToScreen('AddCustomer')}
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
                        <Button style={{backgroundColor:''}}
                         onPress={() => navigate('IndexC')}
                        >
                          <Icon name="globe" style={{fontSize:18}}/>
                          <Text style={{fontSize:18}}>prospect</Text>
                        </Button>
                        <Button vertical>
                          <Icon name="users" style={{fontSize:18, color:'#fff'}}
                              onPress={this.navigateToScreen('Customer')}
                          />
                          <Text style={{fontSize:18, color:'#fff'}}>Customers</Text>
                        </Button>
                        <Button vertical
                        onPress={() => navigate('Greetings')}
                        >
                          <Icon name="phone" style={{fontSize:18}}/>
                          <Text style={{fontSize:18}}>Call Manage</Text>
                        </Button>
                      </FooterTab>
        </Footer>
      </View>
    );
  }
}