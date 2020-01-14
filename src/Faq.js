import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image,TouchableOpacity} from "react-native";
import {Container, Content, Card, CardItem, Body, Left, Accordion, Header, Icon,Footer } from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import Footerbar from './Footer';
import {NavigationActions} from 'react-navigation';

import Fab from './ShareF';


export default class Faq extends React.Component{

  navigateToScreen = (Quote) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: Quote
    });
    this.props.navigation.dispatch(navigateAction);
  }


  
    render(){

      

let dataArray = [
  { title: "How LIC premium can be paid online?", content: "You can pay your LIC premium online from the official website of LIC online gateway portal. The mode of payment can be done via debit/credit or net banking." },
  { title: "Can I pay LIC premium online \n after due date?", content: "Yes, you can pay your LIC premium online after the due date, but it will attract a late penalty fee @ 8% (minimum of ₹5)." },
  { title: "How can I surrender my LIC policy online?", content: "You cannot surrender an LIC policy online. You can only surrender an LIC policy at your servicing branch. A servicing branch is the one where you purchased the respective policy." },
  { title: "Can we pay LIC premium through Paytm?", content: "Yes, Paytm is one the official authorised mobile banking agent which allows policy holders to pay their premiums online. You simply need to select the insurance payment icon on Paytm and submit your policy number. Once paid, you will get a transaction complete message via Paytm notification." },
  { title: "What is reduced paid up in LIC?", content: "A reduced paid up in LIC means that the policy has acquired a paid up value. It is a reduction in sum assured when you do not pay the premium for a traditional participating policy." },
  { title: "Can I pay LIC premium by Cheque?", content: "Yes, you can pay via cheque, cash or online for making an LIC premium payment at any of the authorised branches of LIC." },
  { title: "How is the surrender value of \n LIC calculated?",  content: "A surrender value of an LIC policy is the amount payable to the policyholder by LIC, if he/she has decided to exit the policy before the maturity period. A policy acquires surrender value only after three full premium paid years. In case of a regular premium policy, the surrender value is 30% of the basic premiums paid. In case of a single premium policy, the surrender value is 90% of the premium paid." },
  { title: "Can we pay LIC premium before due date?", content: "Yes, the premium can be paid 30 days before the due date." },
  { title: "What is the late fee for LIC premium", content: "Failure to make the premium before the due date will attract a late penalty @8% (minimum of ₹5)." }
];

        return(
            <Container>
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
                <Content padder>
        <Card>
        <CardItem header  style={{justifyContent:'center',alignContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:22,fontWeight:'bold',color:'darkblue'}}> FundGuard </Text>
        </CardItem>
    
            <Text style={{margin:10,fontSize:16}}>FundGuard is launched by Ram Kumar Sahu to offer Insurance and financial products services to clients in Delhi NCR.</Text>
        </Card>    
        </Content>
        <Content>
      
        <Card>
        <CardItem header style={{justifyContent:'center',alignContent:'center',alignItems:'center',backgroundColor:"#b7daf8",margin:5}}>
            
            <Text style={{fontSize:18,fontWeight:'bold'}}>FAQ's </Text>
  
        </CardItem>    
          <Accordion style={{margin:5}}
            dataArray={dataArray}
            headerStyle={{ backgroundColor: "#b7daf8" }}
            contentStyle={{ backgroundColor: "#ddecf8" }}
          />
          </Card>
        
          </Content>
              
          <Footerbar/> 
          </View>
              </ScrollView>
              <View>
                <Fab/>
              </View>

              <TouchableOpacity
                onPress={this.navigateToScreen('Quote')}
              >
                <Footer style={styles.footer}>
                <Text style={{fontSize:24, fontWeight:'800'}}>Get In Touch</Text>
                </Footer>
               </TouchableOpacity>

            </Container>
        )
    }
}



const DEVICE_WIDTH = Dimensions.get('window').width;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom:5
  },
  footer: {
    backgroundColor:'#FFC300',
    justifyContent:'center', 
    alignItems:'center'
  }

})