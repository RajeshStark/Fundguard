import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from "react-native";
import {Container, Content, Body, Left, Header, Icon, Footer, Tabs, Tab, ScrollableTab } from 'native-base';
import {ScrollView} from 'react-native-gesture-handler'

import {NavigationActions} from 'react-navigation';

import Cm from './Tab2/Cm';
import Zm from './Tab2/Zm';
import Dm from './Tab2/Dm';
import Bm from './Tab2/Bm';


export default class Club extends React.Component{

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
              <Header hasTabs style={{ backgroundColor: '#FBC707'}}>
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
                <Content >
        
        <Tabs
        tabBarUnderlineStyle={{
          backgroundColor: "#ff6781",
          height: 2,
        }}
    >
     
          <Tab heading="CM Club" tabStyle={{backgroundColor:'#FBC707'}} activeTabStyle={{backgroundColor:'#FBC707'}} textStyle={{color:'black'}} activeTextStyle={{color:'black', fontWeight:'bold'}}>
            <Cm />
          </Tab>
          <Tab heading="ZM Club"  tabStyle={{backgroundColor:'#FBC707'}} activeTabStyle={{backgroundColor:'#FBC707'}} textStyle={{color:'black'}} activeTextStyle={{color:'black', fontWeight:'bold'}} >
            <Zm />
          </Tab>
          <Tab heading="DM Club" tabStyle={{backgroundColor:'#FBC707'}} activeTabStyle={{backgroundColor:'#FBC707'}} textStyle={{color:'black'}} activeTextStyle={{color:'black', fontWeight:'bold'}} >
            <Dm />
          </Tab>
          <Tab heading="BM Club" tabStyle={{backgroundColor:'#FBC707'}} activeTabStyle={{backgroundColor:'#FBC707'}} textStyle={{color:'black'}} activeTextStyle={{color:'black', fontWeight:'bold'}}>
            <Bm />
          </Tab>
        </Tabs>
        
        </Content>

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