import React, { Component } from 'react';
import { View, Text, Left, Right, Body, Header, Icon, Content, Footer } from 'native-base';
import {ScrollView,Image,Dimensions, StyleSheet, AppRegistry, TextInput, Alert, TouchableOpacity } from 'react-native';
import "react-native-gesture-handler";
import Footerbar from './Footer';
import {NavigationActions} from 'react-navigation';


export default class Financial extends React.Component{

  navigateToScreen = (Quote) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: Quote
    });
    this.props.navigation.dispatch(navigateAction);
  }



  constructor(props) {
 
    super(props)
 
    this.state = {
 
      name:'',
      phnumber: '',
      emailid: ''
 
    }
 
  }

//Validation

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

      fetch('http://pramod.freevar.com/userregistration/feelfreetocontact.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
       
          name: name,
          phnumber: phnumber,
          emailid: emailid
       
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
     <Content padder>
     
     <View style={{borderColor:'black',borderWidth:2}}>
     <View>
       <View style={{justifyContent:'center',alignItems:'center',marginBottom:15,marginTop:10}}>
              <Text style={{fontSize:25,fontWeight:'bold',color:'black',textDecorationLine:'underline'}}>Get Your Free Financial Plan</Text>
      </View>    
      <View>
        <Text style={{margin:10}}>
        You have come to the right place. 
        I can help you to do financial planning for you and suggest the best financial instrument for investment.
        Do share your contacts to start with.
        </Text>
      </View>
     <View>
     <Text style={{color:'red', textAlign:'center'}}>
      { this.state.Error}
    </Text>
       <TextInput
       onSubmitEditing={() => {this.nextInput.focus()}}
       placeholder="Enter User Name"
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
       </View>
       </Content>
       <View>
      <Footerbar/> 
     </View>
     </ScrollView>
     <TouchableOpacity
            onPress={this.navigateToScreen('Quote')}
          >
            <Footer style={styles.footer}>
            <Text style={{fontSize:24, fontWeight:'800'}}>Get In Touch</Text>
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

  TextInputStyleClass: {
    margin:5,
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 5 ,
    },
    footer: {
      backgroundColor:'#FFC300',
      justifyContent:'center', 
      alignItems:'center'
    }
});

AppRegistry.registerComponent('Financial', () => Financial);