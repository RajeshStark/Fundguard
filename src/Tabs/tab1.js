import React, { Component } from 'react';
import { Container, View, Card, CardItem, Body, Content, Form, Item, Input, Textarea } from 'native-base';
import {StyleSheet,Text, ScrollView, TouchableOpacity, Dimensions, TextInput,Alert,KeyboardAvoidingView} from 'react-native';


export default class Tab1 extends Component {


  
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
 
  functionOne=()=>{
    const {name,phonenumber,email} = this.state;
    if(name==""){
      //alert('please fill the first name');
      this.setState({Error: 'Please Enter Your Name'});
    }
    else if(phonenumber==""){
    //  alert('please fill the last name');
        this.setState({Error: 'Please Enter Your Number'});
    }
    else if(email==""){
          this.setState({Error: 'Please Enter A Valid E-mail ID'});
      }
    
    else{
      //alert('thank you, your form is submitted successfully');
  
      this.UserRegistrationFunction();
    
  
    }
  }


  UserRegistrationFunction = () =>{
 
 
 const { name }  = this.state ;
 const { phonenumber }  = this.state ;
 const { email }  = this.state ;
 const { message }  = this.state ;

 
 
fetch('http://pramod.freevar.com/userregistration/inttobuy.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    name: name,
    phonenumber: phonenumber,
    email: email,
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
            <ScrollView>
              <View>
            <Content padder>
            
          <Card>
            <CardItem header bordered style={{justifyContent:'center', alignContent:'center'}}>
              <Text style={{fontSize:20}}>Retirement Plan</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                Plan now for a independent retired life.
                Choose from Immediate and deferred annuity plans to suit your retirement needs.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
            <View>
            <Text style={{ fontSize:18}}>PLANS:</Text>
               <Text>1. New Jeevan Nidhi    {'\n'}
                     2. Jeevan Shanti       {'\n'}
                     3. Vaya Vandana Yojana {'\n'}
                     4. Jeevan Akshay VI    {'\n'}
                     5. Jeevan Umang
              </Text>
            </View>  
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered style={{justifyContent:'center', alignContent:'center'}}>
              <Text style={{fontSize:20}}>Child Protection Plan</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                Children Plans from LIC provide safeguard and planned savings for the future of your children with respect to funding their future with upbringing,
                education, career, marriage etc..... .
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
            <View>
            <Text style={{ fontSize:18}}>PLANS:</Text>
               <Text>1. New Children's Money Back Plan {'\n'}
                     2. Jeevan Lakshya
              </Text>
            </View>  
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered style={{justifyContent:'center', alignContent:'center'}}>
              <Text style={{fontSize:20}}>Endownment Plan</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                Plan now for a independent retired life.
                Choose from Immediate and deferred annuity plans to suit your retirement needs.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
            <View>
            <Text style={{ fontSize:18}}>PLANS:</Text>
               <Text>1. Nav Jeevan {'\n'}
                     2. Jeevan Pragati {'\n'}
                     3. Limited Premium Endowment Plan {'\n'}
                     4. New Jeevan Anand {'\n'}
                     5. New Endowment Plan {'\n'}
                     6. Aadhaar Stambh {'\n'}
                     7. Jeevan Utkarsh {'\n'}
                     8. Aadhaar Shila {'\n'}
                     9. Single Premium Endowment Plan
              </Text>
            </View>  
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered style={{justifyContent:'center', alignContent:'center'}}>
              <Text style={{fontSize:20}}>Money Back Plan </Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                A perfect plans offered by LIC to meet the insurance needs and the period financial needs of an Individual.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
            <View>
            <Text style={{ fontSize:18}}>PLANS:</Text>
               <Text>1. New Money Back Plan 25 Years {'\n'}
                     2. New Money Back Plan 20 Years {'\n'}
                     3. New Bima Bachat {'\n'}
                     4. Jeevan Shiromani {'\n'}
                     5. Bima Shree
              </Text>
            </View>  
            </CardItem>
          </Card>
       
            </Content>
         <Content padder>  
         <View style={{borderColor:'black',borderWidth:2}}>
         <View style={{justifyContent:'center',alignItems:'center',marginBottom:15,marginTop:10}}>
              <Text style={{fontSize:25,fontWeight:'bold',color:'black',textDecorationLine:'underline'}}>Get Your Free Financial Plan</Text>
      </View>
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
       onChangeText={phonenumber => this.setState({phonenumber})}
       underlineColorAndroid='transparent'
       style={styles.TextInputStyleClass}
       />
       
       <TextInput
       ref={nextInput1 => this.nextInput1 = nextInput1}
       onSubmitEditing={() => {this.nextInput2.focus()}}
       placeholder="Enter Your EmailId"
       keyboardType='email-address' 
       onChangeText={email => this.setState({email})}
       style={styles.TextInputStyleClass}
       />

      <TextInput
       ref={nextInput2 => this.nextInput2 = nextInput2}
       placeholder="Enter Your message"
       
       onChangeText={message => this.setState({message})}
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
      
 
            </Content>
            </View>
            </ScrollView>
</Container>
        );

    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;

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
   margin:5,
    textAlign: 'center',
    marginBottom: 20,
    height: 40,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 5 ,
    }

});