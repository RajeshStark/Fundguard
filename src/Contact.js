import React from 'react';
import { View, Text, Left, Body, Header, Icon, Footer} from 'native-base';
import {ScrollView, Image, Dimensions, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Linking, TextInput, AppRegistry, Alert } from 'react-native';
import "react-native-gesture-handler";
import Footerbar from './Footer';
import {NavigationActions} from 'react-navigation';

export default class Contact extends React.Component{

  navigateToScreen = (Quote) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: Quote
    });
    this.props.navigation.dispatch(navigateAction);
  }




  constructor(props) {
 
    super(props)
 
    this.state = {
 
      name: '',
      phonenumber: '',
      email: '',
      subject: '',
      message: ''
 
    }
 
  }
 
  //Validation

  functionOne=()=>{
    const {name,phonenumber,email,subject,message} = this.state;
    if(name==""){
      this.setState({Error: 'Please Enter Your Name'});
    }
    else if(phonenumber==""){
        this.setState({Error: 'Please Enter Your Number'});
    }
    else if(email==""){
          this.setState({Error: 'Please Enter A Valid E-mail ID'});
      }
    else if(subject==""){
      this.setState({Error: 'Please Enter Purpose'});
    }
    else{
  
      this.UserRegistrationFunction();
  
    }
  }
  // Validation End
  UserRegistrationFunction = () =>{
 
 
 const { name }  = this.state ;
 const { phonenumber }  = this.state ;
 const { email }  = this.state ;
 const { subject }  = this.state ;
 const { message }  = this.state ;


 
 
fetch('http://pramod.freevar.com/userregistration/contactus.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    name: name,
    phonenumber: phonenumber,
    email: email,
    subject: subject,
    message: message
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
// Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
 
      }).catch((error) => {
        console.error(error);
      });
 
 
  }
 

    render(){
        return(
          <View style={styles.container}>

         <Header style={{ backgroundColor: '#FBC707'}}>
         <Left>
   
        <Icon name='menu' style={{padding:20}}
        onPress={() => this.props.navigation.openDrawer()}
      />

    </Left>
    <Body>
      <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center', alignContent:'center'}}>
    <Image 
        style={{width:30, height:50, marginLeft: -30}}
       source={require('../assets/images/flogo.jpg')}
        />
        <Text style={{fontSize:18, marginLeft: 20}}>
          FundGuard
        </Text>
      </View>
    </Body>
     </Header>
     <ScrollView>
     <View>
         <View>
         <KeyboardAvoidingView>
          <View style={{borderColor:'black', margin:10, borderWidth:2}}>
         <View style={{justifyContent:'center',alignItems:'center',marginBottom:15,marginTop:10}}>
              <Text style={{fontSize:25,fontWeight:'bold',color:'black',textDecorationLine:'underline'}}>Submit Your Query</Text>
        </View> 
        <View style={{margin:10}}>
        <Text style={{color:'red', textAlign:'center'}}>
          { this.state.Error}
        </Text>
         <TextInput
         onSubmitEditing={() => {this.nextInput.focus()}}
         placeholder="Enter Your Name"
         onChangeText={name => this.setState({name})}
         style={styles.TextInputStyleClass}
         />

        <TextInput
        onSubmitEditing={() => {this.nextInput1.focus()}}
        ref={nextInput => this.nextInput = nextInput}
         placeholder="Enter Your Number"
         keyboardType='numeric' 
         onChangeText={phonenumber => this.setState({phonenumber})}
         style={styles.TextInputStyleClass}
         />

        <TextInput
         onSubmitEditing={() => {this.nextInput2.focus()}}
         ref={nextInput1 => this.nextInput1 = nextInput1}
         placeholder="Enter Your Email"
         keyboardType='email-address' 
         onChangeText={email => this.setState({email})}
         style={styles.TextInputStyleClass}
         />

        <TextInput
        onSubmitEditing={() => {this.nextInput3.focus()}}
        ref={nextInput2 => this.nextInput2 = nextInput2}
         placeholder="Enter Your Purpose"
         onChangeText={subject => this.setState({subject})}
         style={styles.TextInputStyleClass}
         />

        <TextInput
        onSubmitEditing={() => {this.nextInput4.focus()}}
        ref={nextInput3 => this.nextInput3 = nextInput3}
         placeholder="Your Message"
         onChangeText={message => this.setState({message})}
         style={styles.TextInputStyleClass}
         />



        </View>
        <View style={{justifyContent:'center',alignItems:'center',marginTop:20, marginBottom:20}}>
      <TouchableOpacity
      style={{backgroundColor:'#FBC707',borderRadius:5,padding:10,width:(DEVICE_WIDTH)-60,bordercolor:'black',borderWidth:0.5}}
      onPress={()=> this.functionOne()}
      >
      <Text style={{color:'black',textAlign:'center',
      fontSize:20}}>Submit</Text>
      </TouchableOpacity>

       </View>
 
       </View>
         </KeyboardAvoidingView>
         <View style={{justifyContent:'center',alignItems:'center',marginBottom:15,marginTop:20}}>
              <Text style={{fontSize:25,fontWeight:'bold',color:'black',textDecorationLine:'underline'}}>Contact Info</Text>
        </View>
            <View style={{justifyContent:'center', alignItems:'center'}}>   
              <Image style={styles.lic} source={require('../assets/images/ram2.png')}/>       
            </View>
       
    </View>
     </View>
     <View>
      <Footerbar/> 
     </View>
  
     </ScrollView>

     <TouchableOpacity
            onPress={this.navigateToScreen('Quote')}
          >
            <Footer style={styles.footer}>
            <Text style={{fontSize:24, fontWeight:'800', color:'#fff'}}>Get In Touch</Text>
            </Footer>
      </TouchableOpacity>
  
    </View>
        );
    }
} 

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#FBC707',
    padding: 10,
    width: (DEVICE_WIDTH)-80,
    borderRadius:5,
    marginTop:20,
    shadowColor:'grey'
  },
  lic : {
    width : (DEVICE_WIDTH)-20,
    height:200,
    resizeMode:'stretch',
    borderColor:'black',
    borderWidth:1,
    
  },
link: {
  backgroundColor:'#FBC707',
  padding:10,
  margin:10,
  borderColor:'black',
  borderRadius:5,
  alignItems:'center',
  justifyContent:'center'
},

  TextInputStyleClass: {
   
  textAlign: 'center',
  marginBottom: 20,
  height: 40,
  borderWidth: 1,
  // Set border Hex Color Code Here.
   borderColor: '#2196F3',
   
   // Set border Radius.
   borderRadius: 5 ,
   
  // Set border Radius.
   //borderRadius: 10 ,
  },
  footer: {
    backgroundColor:'#D35400',
    justifyContent:'center', 
    alignItems:'center'
  }
});

AppRegistry.registerComponent('Contact', () => Contact);