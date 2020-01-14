import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  Alert
} from 'react-native';
import "react-native-gesture-handler";
import { Header, Content, Body, Left, Right, Accordion, Icon, Footer } from 'native-base';
import ImageCarousel from './ImageCarousel';
import Slider from './Slider';
import Footerbar from './Footer';
import {NavigationActions} from 'react-navigation';
import Fab from './ShareF';


export default class Home extends React.Component {
    
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }
   

  render(){

    const {navigate} = this.props.navigation;


  return (
     <View style={styles.container}>

     <Header style={{ backgroundColor: '#FBC707'}}>
     <Left>
     <Icon name='menu' style={{padding:20}}
        onPress={() => this.props.navigation.openDrawer()}  
     />
    </Left>
    <Body style={{alignItems:'center'}}>
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
    <Right>
    <Icon name='settings' style={{padding:20}}
      // onPress={() => navigate('LogIn')}
      onPress={() => navigate('LogIn')}
     />
    </Right>
     </Header>
      <ScrollView>
      <View>
      <View>
      <View style={styles.slider}>
            <Slider/>    
      </View>
          <View style={{marginTop:20,width:DEVICE_WIDTH,paddingBottom:20}}>
            <View style={{justifyContent:'center',alignItems:'center',marginBottom:15}}>
              <Text style={{fontSize:30,fontWeight:'bold',color:'#00448D',textDecorationLine:'underline'}}>ABOUT US</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <View>
                <View style={{borderWidth:1,marginLeft:5,zIndex:10}}>  
                  <Image style={{width:300/2.5+3,height:400/2.5}} source={require('../assets/images/ramsahu.png')}/>
                </View>
                <View style={{margin:3}}>
                <Text style={{fontSize:13}}>Ram Kumar Sahu</Text>
                <Text>FundGuard has {"\n"}been launched by{"\n"}Ram Kumar Sahu.</Text>
                </View>
              </View>   
              <View style={{padding:10,marginRight:100,width:DEVICE_WIDTH-125}}>
               <Text>I, Ram kumar Sahu (popularly known as the Architect of Human Happiness) welcome you to my website: www.fundguard.in. I offer Insurance and other financial products to clients under my flagship company, FundGuard.
             I have made a small attempt to setup my digital identity and accessible to my prospects and clients any time every time through digital media to provide accurate information & services they might require on their fingertips.
               </Text>
              </View> 
                      
            </View>
          </View>
          <View style={{margin:8}}>
          <Text> I am a licentiate from Insurance Regulatory and Development Authority (IRDA) and have been working as a customer focused Life Advisor & Financial Planner. I’m passionate to research the financial products and suggest the best suitable financial solution to my clients.
           I am an avid learner, apart from self study, I have been actively participating in industry seminars, trainings and forums to update my skills and mentor my fellow team members.
           It has helped me to develop a keen sense of foresight in financial domain to introduce revolutionary ways in insurance & financial products selling to suit the individual’s changing financial needs.
          </Text>
          </View>
           </View>
         <View style={{margin:8}}>
           <Text style={{alignContent:'center', justifyContent:'center',fontSize:25}}>We as a Team :</Text>
           <Text>We are having a Personalized Customer Advisory Service, and technically well equipped office. Our organization is made up of young, expert and dynamic team of professionals each specializing in their respective domains. Till date we have sold numerous Insurance Policies and financial products.
            Also assisted several clients with their various financial requirements. We as a team, have firm belief in superior quality of services to our clients and stand with them to help with any queries/clarifications and support as and when they needed.
            Our client first approach has made us the most preferred Insurance and financial products Advisor serving thousands of happy clients and hence popularly known as the
            <Text style={{fontSize:13,fontWeight:'bold'}}> Architect of Human Happiness</Text>.
           </Text>
         </View>

            <View style={{justifyContent:'center',alignItems:'center',marginBottom:15}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'#00448D',textDecorationLine:'underline'}}>LIC Plans</Text>
            </View>
         <Content padder>
          <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
        </Content>

            <View style={{justifyContent:'center',alignItems:'center',marginBottom:15}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'#00448D',textDecorationLine:'underline'}}>Gallery</Text>
            </View>
          
        
            <View style={styles.carouselContainer2}>
            <ImageCarousel/>     
             </View> 

             <View>
               <Footerbar/>
             </View>
                       
         </View>
      </ScrollView>
      <View >
       <Fab/>
      </View>
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

// Gallery Function code




//Accordian
const dataArray = [
  { title: "Insurance Plans", content: 'Endowment plan is term insurance policy with maturity benefits. In case of demise of policyholder, the Sum Assured along with accrued bonuses (if any) is paid to the beneficiary. On survival of policyholder, the same is paid on the maturity date. \n 1. Jeevn Labh \n 2. Jeevn Lakshya \n 3.Jeevn Rakshak \n 4.Jeevn Pragati \n 5.NavJeevn Anand \n 6.NavJeevn Plan \n 7.Aadhaar shila      ' },
  { title: "Health Insurance Plans", content: "Health plans from LIC give you the financial security to meet health related contingencies \n 1. Adhaar Shila \n 2. Jeevan Arogya" },
  { title: "Pension Plans", content: "1. Jeevan Akshay \n2. New Jeevan Nidhi Plans" },
  { title: "Micro Insurance", content: "1.Lic's Bhagya Lakshmi \n2. Lic's Micro Bachat \n3. New Jeevan Mangal Plan" },
  { title: "Unit Plans", content: "New Endowment Plus" }
];


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  banner4:{
    width : Dimensions.get('window').width,
    height:200,
    alignItems: 'center',
    resizeMode:'stretch',
  },
  video:{
    width : DEVICE_WIDTH,
    height : 300
  },
  buttonsContainer:{
    alignItems: 'center',
    justifyContent: 'center',
        backgroundColor: '#5484ed',

  },
  button:{

    backgroundColor: '#5484ed',
    textAlign: 'center',
    fontSize: 25,
    alignItems: 'center',
    height: 45,
    width: DEVICE_WIDTH,
    borderRadius: 30,
    color: 'white',
    marginBottom: 7,
    textAlignVertical: 'center',
  },
  carouselContainer2: { 
    width: 500,
    height:200, 
    marginTop:10,
    margin: 10
  }, 
  slider: {
    width: (DEVICE_WIDTH) ,
    height: 220,
    
  },
  footer: {
    backgroundColor:'#FFC300',
    justifyContent:'center', 
    alignItems:'center',
    
  }

 
});
