import React, { Component } from 'react';
import { Container, View, Card, CardItem, Body, Content } from 'native-base';
import {StyleSheet,Text, ScrollView, Dimensions, TouchableOpacity, TextInput} from 'react-native';
import Footerbar from '../Footer';

export default class Tab2 extends Component {

  
  
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
            <View>
            <Content padder>
            <ScrollView>
            <View>
            <Content>
          <Card>
            <CardItem header bordered style={{justifyContent:'center', alignContent:'center'}}>
              <Text style={{fontSize:20}}>Jeevan Arogya</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                LIC's Jeevan Arogya is a unique non-participating non-linked plan which provides health insurance
                 cover against certain specified health risks and provides you with timely support in case of medical emergencies
                  and helps you and your family remain financially independent in difficult times.
                Health has been a major concern on everybody’s mind, including yours. In these days of skyrocketing medical expenses,
                 when a family member is ill, it is a traumatic time for the rest of the family. As a caring person,
                  you do not want to let any unfortunate incident to affect your plans for you and your family. So why let any medical emergencies shatter your peace of mind.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
            <View>
            <Text style={{ fontSize:18}}>Benefits offered under the plan are:</Text>
               <Text>1. Hospital cash benefit (HCB) {'\n'}
                     2. Major Surgical Benefit (MSB){'\n'}
                     3. Day Care Procedure Benefit{'\n'}
                     4. Other Surgical Benefit{'\n'}
                     5. Ambulance Benefit{'\n'}
                     6. Premium waiver Benefit (PWB){'\n'}
              </Text>
            </View>  
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered style={{justifyContent:'center', alignContent:'center'}}>
              <Text style={{fontSize:20}}>Cancer Cover</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                LIC’s Cancer Cover is a regular premium payment health insurance plan which provides financial protection
                in case the Life Assured is diagnosed with any of the specified Early and/or Major Stage Cancer during the policy term.
                A malignant tumor characterized by the uncontrolled growth and spread of malignant cells with invasion and destruction of normal tissues.
                This diagnosis must be supported by histological evidence of malignancy. The term cancer includes leukemia, lymphoma and sarcoma... .
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
            <View>
            <Text style={{ fontSize:18}}>Benefits offered under the plan are :</Text>
               <Text>1. Premium Waiver Benefit {'\n'}
                     2. Lump sum benefit
              </Text>
            </View>  
            </CardItem>
          </Card>
          </Content>
          <Content>
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
            </Content> 
            <View>
               <Footerbar/>
             </View>
            </View>


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
    margin:5,
     textAlign: 'center',
     marginBottom: 20,
     height: 40,
     borderWidth: 1,
     borderColor: '#2196F3',
     borderRadius: 5 ,
     }

});