/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {TouchableOpacity, StyleSheet} from "react-native"
import { Container, Header,Left,Body,Icon, Tab, Tabs, ScrollableTab, Content, Footer} from 'native-base';
import Tab0 from './Tabs/tab0';
import Tab1 from './Tabs/tab1';
import Tab2 from './Tabs/tab2';
import Tab3 from './Tabs/tab3';
import Tab4 from './Tabs/tab4';
import Tab5 from './Tabs/tab5';
import Tab6 from './Tabs/tab6';
import Tab7 from './Tabs/tab7';
import{
  Image,
  View,
  Text
}from 'react-native';
import "react-native-gesture-handler";
import Footerbar from './Footer';
import {NavigationActions} from 'react-navigation';



export default class TabsScrollableExample extends Component {

  navigateToScreen = (Quote) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: Quote
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <Container>
        <Header hasTabs style={{backgroundColor: '#FBC707'}}>
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
        <Content >
        
        <Tabs locked transparent renderTabBar={()=> <ScrollableTab />}
      
        tabBarUnderlineStyle={{
          height: 2,
          backgroundColor:'black'
        }}
      >
        <Tab heading="Our Services" tabStyle={{backgroundColor:'#FBC707'}} activeTabStyle={{backgroundColor:'#FBC707'}} textStyle={{color:'black'}} activeTextStyle={{color:'black', fontWeight:'bold'}}>
            <Tab0 />
          </Tab>
          <Tab heading="Lic Insurance" tabStyle={{backgroundColor:'#FBC707'}} activeTabStyle={{backgroundColor:'#FBC707'}} textStyle={{color:'black'}} activeTextStyle={{color:'black', fontWeight:'bold'}}>
            <Tab1 />
          </Tab>
          <Tab heading="Health Insurance"  tabStyle={{backgroundColor:'#FBC707'}} activeTabStyle={{backgroundColor:'#FBC707'}} textStyle={{color:'black'}} activeTextStyle={{color:'black', fontWeight:'bold'}} >
            <Tab2 />
          </Tab>
          <Tab heading="General Insurance" tabStyle={{backgroundColor:'#FBC707'}} activeTabStyle={{backgroundColor:'#FBC707'}} textStyle={{color:'black'}} activeTextStyle={{color:'black', fontWeight:'bold'}} >
            <Tab3 />
          </Tab>
          <Tab heading="Motor Insurance" tabStyle={{backgroundColor:'#FBC707'}} activeTabStyle={{backgroundColor:'#FBC707'}} textStyle={{color:'black'}} activeTextStyle={{color:'black', fontWeight:'bold'}}>
            <Tab4 />
          </Tab>
          <Tab heading="Travel Insurance" tabStyle={{backgroundColor:'#FBC707'}} activeTabStyle={{backgroundColor:'#FBC707'}} textStyle={{color:'black'}} activeTextStyle={{color:'black', fontWeight:'bold'}}>
            <Tab5 />
          </Tab>
          <Tab heading="Accident Insurance" tabStyle={{backgroundColor:'#FBC707'}} activeTabStyle={{backgroundColor:'#FBC707'}} textStyle={{color:'black'}} activeTextStyle={{color:'black', fontWeight:'bold'}}>
            <Tab6 />
          </Tab>
          <Tab heading="Mutual Fund" tabStyle={{backgroundColor:'#FBC707'}} activeTabStyle={{backgroundColor:'#FBC707'}} textStyle={{color:'black'}} activeTextStyle={{color:'black', fontWeight:'bold'}}>
            <Tab7 />
          </Tab>
        </Tabs>
        
        </Content>
        <TouchableOpacity
            onPress={this.navigateToScreen('Quote')}
          >
            <Footer style={styles.footer}>
            <Text style={{fontSize:24, fontWeight:'800'}}>Get In Touch</Text>
            </Footer>
      </TouchableOpacity>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  footer: {
    backgroundColor:'#FFC300',
    justifyContent:'center', 
    alignItems:'center'
  }

})