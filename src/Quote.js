/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Alert
} from 'react-native';
import {Container, Content, Card, CardItem, Body, Left,Right, Form, Item, Input, Label, Accordion, Textarea, Header, Icon, ListItem, Radio } from 'native-base';
import "react-native-gesture-handler";
import Footerbar from './Footer';
import {NavigationActions} from 'react-navigation';
import { Divider } from 'react-native-elements';


export default class Quote extends React.Component {

  constructor(props) {
 
    super(props)
 
    this.state = {
 
      name: '',
      mobilenumber: '',
      email: '',
      age: '',
      city: '',
      gender: '',
      profession: '',
      Subject: '',
      message: ''
 
    }
 
  }
 //Vlidate
 
 functionOne=()=>{
  const {name,mobilenumber,email,age,city,gender,profession,Subject,message} = this.state;
  if(name==""){
    this.setState({Error: 'Please Enter Your Name'});
  }
  else if(mobilenumber==""){
      this.setState({Error: 'Please Enter Your Number'});
  }
  else if(email==""){
        this.setState({Error: 'Please Enter A Valid E-mail ID'});
    }
    else if(age==""){
      this.setState({Error: 'Please Enter Your Age'});
  }
  else if(city==""){
    this.setState({Error: 'Please Enter Your City'});
  }
  else if(gender==""){
    this.setState({Error: 'Please Enter Your Gender'});
  }
  else if(profession==""){
    this.setState({Error: 'Please Enter Your Profession'});
  }
 
  else if(message==""){
    this.setState({Error: 'Please Enter A Valid E-mail ID'});
  }
  else{

    this.UserRegistrationFunction();

  }
}

 //Validat End

  UserRegistrationFunction = () =>{
 
 
    const { name }  = this.state ;
    const { mobilenumber }  = this.state ;
    const { email }  = this.state ;
    const { age }  = this.state ;
    const { city }  = this.state ;
    const { gender }  = this.state ;
    const { profession }  = this.state ;
    const { subject }  = this.state ;
    const { message }  = this.state ;
   
   
    
    
   fetch('http://pramod.freevar.com/userregistration/getyourquote.php', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
    
       name: name,
       mobilenumber: mobilenumber,
       email: email,
       age: age,
       city:city,
       gender: gender,
       profession: profession,
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
      <Container>
       <Header style={{ backgroundColor: '#FBC707'}}>
     <Left>
   
     <Icon name='menu'
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
         
        <Content padder> 
             
        <View style={{borderColor:'black',borderWidth:2}}>
        
        <View style={{justifyContent:'center',alignItems:'center',marginBottom:15,marginTop:10}}>
              <Text style={{fontSize:25,fontWeight:'bold',color:'black',textDecorationLine:'underline'}}>Get Your Quote</Text>
            </View>  
            <Text style={{fontSize:15, margin:10}}>
          Interested to buy an LIC Policy, I can help you to assess and recommend the best suitable policy to you.
          </Text>
         <View>
         <KeyboardAvoidingView>

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
         onChangeText={mobilenumber => this.setState({mobilenumber})}
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
         placeholder="Enter Your Age"
         keyboardType='numeric' 
         onChangeText={age => this.setState({age})}
         style={styles.TextInputStyleClass}
         />

         <TextInput

         onSubmitEditing={() => {this.nextInput4.focus()}}
         ref={nextInput3 => this.nextInput3 = nextInput3}
         placeholder="Enter Your City"
         onChangeText={city => this.setState({city})}
         style={styles.TextInputStyleClass}
         />

         <TextInput
  
         onSubmitEditing={() => {this.nextInput5.focus()}}
         ref={nextInput4 => this.nextInput4 = nextInput4}
         placeholder="Your Gender"
         onChangeText={gender => this.setState({gender})}
         style={styles.TextInputStyleClass}
         />

         <TextInput
      
          onSubmitEditing={() => {this.nextInput6.focus()}}
          ref={nextInput5 => this.nextInput5 = nextInput5}
         placeholder="Enter Your Profession"
         onChangeText={profession => this.setState({profession})}
         style={styles.TextInputStyleClass}
         />

        <TextInput
        
         onSubmitEditing={() => {this.nextInput7.focus()}}
         ref={nextInput6 => this.nextInput6 = nextInput6}
         placeholder="Enter Your Purpose"
         onChangeText={subject => this.setState({subject})}
         style={styles.TextInputStyleClass}
         />

        <TextInput
       
        ref={nextInput7 => this.nextInput7 = nextInput7}
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
 
  
         </KeyboardAvoidingView>
         </View>
       </View>
 
        </Content>
        <Content>
         <Footerbar/> 
       </Content>
       
        </View>
        </ScrollView>
       
      </Container>

  );
}
}


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({

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
   
        textAlign: 'center',
        marginBottom: 40,
        height: 40,
        borderWidth: 1,
        // Set border Hex Color Code Here.
         borderColor: '#2196F3',
         
         // Set border Radius.
         borderRadius: 5 ,
         
        // Set border Radius.
         //borderRadius: 10 ,
        }
});  