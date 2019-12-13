/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Container, View, Card, CardItem, Body, Content } from 'native-base';
import {StyleSheet,Text, ScrollView, Dimensions, TouchableOpacity, TextInput} from 'react-native';
import Footerbar from '../Footer';

export default class Tab4 extends Component {

  
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
            <ScrollView style={{flexGrow:0 }}>
            <Content padder>
            <View>
                  <Card>
            <CardItem header bordered style={{justifyContent:'center', alignContent:'center'}}>
              <Text style={{fontSize:20}}>Motor Insurance</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
              <View>
                <Text>
                Motor or Auto insurance policy is mandatory for vehicle owners as per Indian Motor Vehicles Act 1988.
                This Plan is designed to give coverage for losses which insured might incur in case his gets stolen or damaged.
                The amount of Auto insurance premium is decided based on the Insured Declared Value of a car. The premium will increase, 
                if you raise the IDV limit and vice versa.

                </Text>
                <Text style={{fontSize:18, marginLeft:10}}>Why do I need this Insurance
                
                </Text>
                <Text>
                It is mandatory to insure your vehicle as per the Motor Vehicles Act 1988.{'\n'}
                That apart, insuring your vehicle saves you from any financial loss caused due to accidents, damage or theft of your car.
                Additionally, insurance covers the safety of the co-passengers, someone else's property and pedestrians too.
                </Text>
                </View>
              </Body>
            </CardItem>
            <CardItem footer bordered>
            <View>
            <Text style={{ fontSize:18, marginLeft:10}}>Auto Insurance protects you for the below mentioned damages, should they occur:-</Text>
               <Text>1. Accident{'\n'}
                     2. Self-Ignition( Transit by Rail, Road, Air & Elevator,Theft){'\n'}
                     3. Riot & Strikes and / or Malicious Acts,Flood, Cyclone){'\n'}
                     4. Personal Accident Coverage.
              </Text>
            </View>  
            </CardItem>
          </Card>

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
            </Content>
            </ScrollView>
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