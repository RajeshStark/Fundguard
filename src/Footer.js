import React from "react";
import{View, Text, Image, Linking, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import {Content} from 'native-base'
import { SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Footerbar extends React.Component{

   render(){
 return(
<Content >
<View style={{backgroundColor:'#1D4E9E', margin:5, borderRadius:5}}>
  <Text style={{fontSize:26, margin:10, color:'white', fontWeight:'bold'}}>Ram Kumar Sahu{"\n"}
  <Text style={{fontSize:18, margin:10, color:'white',fontWeight:'300'}}>
  Founder Of FundGuard
  </Text>
  </Text>
 
    <TouchableOpacity style={{flexDirection:'row'}}
     onPress={()=>{Linking.openURL('tel:+(91) 88-022-02259');}}
    >
      <Icon name='phone' style={{margin:10,fontSize:22, color:'white'}}/>
    <Text style={{fontSize:18, margin:10, color:'white'}}>
 Mobile No : {"\n"}+91-8802202259
    </Text>
    </TouchableOpacity>

    <TouchableOpacity style={{flexDirection:'row'}}
    onPress={() => {
     Linking.openURL('mailto:rks.fundguard@gmail.com');}}
    >
      <Icon name='envelope' style={{margin:10,fontSize:22, color:'white'}}/>
    <Text style={{fontSize:18, margin:10, color:'white'}}>
E-Mail ID: {"\n"}rks.fundguard@gmail.com
    </Text>
    </TouchableOpacity>

    <TouchableOpacity style={{flexDirection:'row'}}
    onPress={() => {
     Linking.openURL('https://fundguard.in');}}
    >
      <Icon name='globe' style={{margin:10,fontSize:22, color:'white'}}/>
    <Text style={{fontSize:18, margin:10, color:'white'}}>
Our Website: {"\n"}http://www.fundguard.in
    </Text>
    </TouchableOpacity>

    <View style={{justifyContent:'center', alignItems:'center'}}>
         
          <Image
          source={{uri:'https://content3.jdmagicbox.com/comp/tirupati/dc/9999px877.x877.1243409219d9a2q7.dc/catalogue/lic-of-india-tirupathi-ho-tirupati-life-insurance-agents-lic-y4u9xhc.jpg'}}
          style={{height:100, width:((DEVICE_WIDTH)/2), resizeMode:'stretch'}}/>

         <Text style={{fontWeight:'400', fontSize:15, margin:10, color:'white'}}>
          Life Insurance Corporation of India is an Indian state-owned insurance group and investment company headquartered in Mumbai. It is the largest insurance company in India.
          </Text>
   </View>
 
  <View >
    <View style={{flexDirection:'column', justifyContent:'center',alignItems:'center', marginBottom:10}}>
    <Text style={{fontSize:24, color:'white',}}>Follow Us On:</Text>
    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
       <SocialIcon
           onPress={() => {
           Linking.openURL("https://api.whatsapp.com/send?phone= +91-8802202259");}}
           style={{backgroundColor:'green'}}
           raised={true}
           type='whatsapp'
         />
         
         <SocialIcon
              type='linkedin'
              onPress={() => {
           //on clicking we are going to open the URL using Linking
           Linking.openURL('https://www.linkedin.com/in/ramkumar-sahu-2b21b5195/');
         }}
           />
          
            <SocialIcon
              type='facebook'
              onPress={() => {
           //on clicking we are going to open the URL using Linking
           Linking.openURL('https://www.facebook.com/people/Ram-Kumar/100016127598957');}}
              
           />
           <SocialIcon
              type='instagram'
              onPress={() => {
           //on clicking we are going to open the URL using Linking
             Linking.openURL('https://www.instagram.com/fundguard/');}}
           />
       
       <TouchableOpacity
        style={styles.ic}
        onPress={() => {
         Linking.openURL('mailto:lic.jitendrachaurasia@gmail.com');}}
        >
        <Icon name="envelope" style={{fontSize:20, color:'white'}}/>
         </TouchableOpacity>
         </View>
        
{/* 
        <TouchableOpacity
           style={{backgroundColor:'#FBC707',borderRadius:5,padding:10,width:(DEVICE_WIDTH)-60,bordercolor:'black',borderWidth:0.5}}
           onPress={this.navigateToScreen('Join')}
           >
           <Text style={{color:'black',textAlign:'center',
           fontSize:20}}>Explore Career as an LIC Agent</Text>
         </TouchableOpacity> */}
     </View>
  </View>

</View>
</Content>

 )
}
}



const DEVICE_WIDTH = Dimensions.get('window').width;


const styles = StyleSheet.create({
  ic :{
    padding:10, 
    height:50, 
    width:50,
    borderRadius:50,
    borderColor:'black',
    borderWidth:0.5,
    backgroundColor:'#B23121',
    justifyContent:'center',
    alignItems:'center',
  }
})