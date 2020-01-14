import React, { Component } from 'react';
import { View, Text, Left, Right, Body, Header, Icon, Form, Item, Input, Label, Footer } from 'native-base';
import {ScrollView, SafeAreaView, Image, Button, Dimensions, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import "react-native-gesture-handler";
import Footerbar from './Footer';
import {NavigationActions} from 'react-navigation';


export default class Refer extends React.Component{
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
      phnumber: '',
      emailid: '',
 
    }
 
  }

  // Validation
  functionOne=()=>{
    const {name,phnumber,emailid} = this.state;
    if(name==""){
      //alert('please fill the first name');
      this.setState({Error: 'please fill the first name'});
    }
    else if(phnumber==""){
      this.setState({Error: 'please fill the phone number'});
    }
    else if(emailid==""){
    //  alert('please fill the last name');
        this.setState({Error: 'please fill your mail ID'});
    }
    
    else{
      //alert('thank you, your form is submitted successfully');
  
      this.UserRegistrationFunction();
    
  
    }
  }

  // Validation End

  UserRegistrationFunction = () =>{
 
 
    const { name }  = this.state ;
    const { phnumber }  = this.state ;
    const { emailid }  = this.state ;
    
   
    
    
   fetch('http://pramod.freevar.com/userregistration/referafriend.php', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
    
       name: name,
       phnumber: phnumber,
       emailid: emailid,
    
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
       <View style={{borderColor:'black', margin:10, borderWidth:2}}>
       <View style={{justifyContent:'center',alignItems:'center',marginBottom:15,marginTop:10}}>
        <Text style={{fontSize:25,fontWeight:'bold',color:'black',textDecorationLine:'underline'}}>Refer A Friend</Text>
            </View>    
        <Text style={{color:'red', textAlign:'center'}}>
      { this.state.Error}
    </Text>
       <TextInput
       onSubmitEditing={() => {this.nextInput.focus()}}
       placeholder="Enter User Name"
       autoFocus = {true}
       onChangeText={name => this.setState({name})}
       underlineColorAndroid='transparent'
       style={styles.TextInputStyleClass}
       />

       <TextInput
       ref={nextInput => this.nextInput = nextInput}
       onSubmitEditing={() => {this.nextInput1.focus()}}
       placeholder="Enter Your Number"
       keyboardType='numeric' 
       onChangeText={phnumber => this.setState({phnumber})}
       underlineColorAndroid='transparent'
       style={styles.TextInputStyleClass}
       />
  
       <TextInput
       ref={nextInput1 => this.nextInput1 = nextInput1}
       placeholder="Enter Your EmailId"
       keyboardType='email-address' 
       onChangeText={emailid => this.setState({emailid})}
       underlineColorAndroid='transparent'
       style={styles.TextInputStyleClass}
       />
         
  <View style={{justifyContent:'center',alignItems:'center',marginTop:20, marginBottom:20}}>
      <TouchableOpacity
      style={{backgroundColor:'#FBC707',borderRadius:5,padding:10,width:(DEVICE_WIDTH)-60,bordercolor:'black',borderWidth:0.5}}
      onPress={() => this.functionOne()}
      >
      <Text style={{color:'black',textAlign:'center',
      fontSize:20}}>Submit</Text>
      </TouchableOpacity>
  </View>
      
       </View>
       </View>
       
     <View>
      <Footerbar/> 
     </View>

     </ScrollView>

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
      TextInputStyleClass: {
        margin:5,
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
          backgroundColor:'#1D4E9E',
          justifyContent:'center', 
          alignItems:'center'
        }
});