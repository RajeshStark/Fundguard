import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image,TouchableOpacity} from "react-native";
import {Container, Content, Card, CardItem, Body, Left, Accordion, Header, Icon,Footer } from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import Footerbar from './Footer';
import {NavigationActions} from 'react-navigation';




export default class Faq extends React.Component{

  navigateToScreen = (Quote) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: Quote
    });
    this.props.navigation.dispatch(navigateAction);
  }


  
    render(){

      

let dataArray = [
  { title: "How Much Salary Can I Expect \n As An Lic Agent?", content: "There is no prescribed salary for LIC agent it is like business you earn through commission." },
  { title: "How Can I See My Life In Future?", content: "LIC has lot of opportunities to grow, there is no limit in earning you can earn as much as you can." },
  { title: "Will I Get Any Support For Preparing \n To Exam?", content: "Yes,you will get complete support from us. For more information you can register in our website we will get back to you" },
  { title: "What Are My Works?", content: "There are no specific timings,you can set your own work timing." },
  { title: "How Much Can I Earn As A Lic Agent?", content: "There is no limit for earnings, it depends upon your potential." },
  { title: "What Is Life Insurance?", content: "Life Insurance is designed to protect your family and other people who may depend on you for financial support. Life insurance pays a death benefit to the beneficiary of the life insurance policy." }
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
        <Text style={{fontSize:18,fontWeight:'bold'}}> FundGuard </Text>
        </CardItem>
    
            <Text style={{margin:10}}>FundGuard is launched by Ram Kumar Sahu to offer Insurance and financial products services to clients in Delhi NCR.</Text>
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
              <TouchableOpacity
                onPress={this.navigateToScreen('Quote')}
              >
                <Footer style={styles.footer}>
                <Text style={{fontSize:24, fontWeight:'800', color:'#fff'}}>Get In Touch</Text>
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
    backgroundColor:'#D35400',
    justifyContent:'center', 
    alignItems:'center'
  }

})