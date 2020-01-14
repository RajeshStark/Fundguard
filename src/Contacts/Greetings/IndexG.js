/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import{
  Image,
  View,
  Text
}from 'react-native';
import "react-native-gesture-handler";
import {TouchableOpacity, StyleSheet, Dimensions} from "react-native"
import { Container, Header,Left,Body, Tab, Tabs, ScrollableTab,Title, Segment, Content, Footer, FooterTab, Button,Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import OptionsMenu from "react-native-options-menu";
import {NavigationActions} from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MoreIcon = require("../../../assets/images/dots-vertical.png");

import Tab1 from './TabG/CallLog';
import Tab2 from './TabG/Frequent';
import Tab3 from './TabG/Report';



export default class IndexG extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  state = {
    activePage:1,
}

selectComponent = (activePage) => () => this.setState({activePage})

_renderComponent = () => {
  if(this.state.activePage === 1)
    return <Tab1/> //... Your Component 1 to display
  if (this.state.activePage === 2) {
    return <Tab2/>
  } else {
    
  }
    return <Tab3/> //... Your Component 2 to display
}




  render() {

    const {navigate} = this.props.navigation;

    
    return (
      <Container>
          <Header hasSegment style={{ backgroundColor: '#FBC707'}} >
                  <Left>
                  <Icon name='bars' style={{fontSize:20, padding:10}}
                  onPress={() => this.props.navigation.openDrawer()} 
                  />
                 </Left>
                 <Body style={{alignItems:'center'}}>
                   <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center', alignContent:'center'}}>
                 <Image 
                     style={{width:30, height:50, marginLeft: -30}}
                    source={require('../../../assets/images/flogo.jpg')}
                     />
                     <Text style={{fontSize:18, marginLeft: 20}}>
                       FundGuard
                     </Text>
                   </View>
                 </Body>
                 <Right>
                 <OptionsMenu
                    button={MoreIcon}
                    buttonStyle={{ width: 32, height: 30, margin: 7.5, resizeMode: "contain" }}
                    destructiveIndex={1}
                    options={["Edit Profile", "Log Out"]}
                    actions={[this.navigateToScreen('EditProfile'), this.deletePost]}/>
                   
                 </Right>
                  </Header>
        

        <Segment style={{ backgroundColor: '#FBC707',borderColor:'black'}}>
          <Button first active={this.state.activePage === 1}
                   style={(this.state.btnSelected== 1)?styles.btnSelected:styles.notSelected}
                   onPress={this.selectComponent(1)}
          >
            <Text style={{fontSize:16, padding:10}}>Call Logs</Text>
          </Button>
          <Button active={this.state.activePage === 2}
                  onPress={this.selectComponent(2)}>
            <Text style={{fontSize:16, padding:10}}>Frequntly Used</Text>
          </Button>
          <Button last active={this.state.activePage === 3}
           style={(this.state.btnSelected== 1)?styles.btnSelected:styles.notSelected}
                  onPress={this.selectComponent(3)}>
            <Text style={{fontSize:16, padding:10}}>Delivery Report</Text>
          </Button>
        </Segment>
        <Content >
        {/* <Tabs transparent renderTabBar={()=> <ScrollableTab />}
      
        tabBarUnderlineStyle={{
          height: 2,
          backgroundColor:'black'
        }}
      >
        {/* <Tab heading="Our Services" tabStyle={{backgroundColor:'#FBC707'}} activeTabStyle={{backgroundColor:'#FBC707'}} textStyle={{color:'black'}} activeTextStyle={{color:'black', fontWeight:'bold'}}>
            <Tab0 />
          </Tab> */}
          {/* <Tab heading="Call Logs" tabStyle={{backgroundColor:'#FBC707'}} activeTabStyle={{backgroundColor:'#FBC707'}} textStyle={{color:'black'}} activeTextStyle={{color:'black', fontWeight:'bold'}}>
            <Tab1 />
          </Tab>
          <Tab heading="Frequently Used"  tabStyle={{backgroundColor:'#FBC707'}} activeTabStyle={{backgroundColor:'#FBC707'}} textStyle={{color:'black'}} activeTextStyle={{color:'black', fontWeight:'bold'}} >
            <Tab2 />
          </Tab>
          <Tab heading="Delivery Report" tabStyle={{backgroundColor:'#FBC707'}} activeTabStyle={{backgroundColor:'#FBC707'}} textStyle={{color:'black'}} activeTextStyle={{color:'black', fontWeight:'bold'}} >
            <Tab3 />
          </Tab>

        </Tabs>  */}




                   <View>
                    {this._renderComponent()}
                    </View>

        </Content>

        <Footer>
                      <FooterTab style={{backgroundColor:"#5183ef"}}>
                        <Button style={{backgroundColor:''}}
                         onPress={() => navigate('IndexC')}
                        >
                          <Icon name="globe" style={{fontSize:18}}/>
                          <Text style={{fontSize:18}}>prospect</Text>
                        </Button>
                        <Button vertical
                         onPress={() => navigate('Costumers')}
                        >
                          <Icon name="users" style={{fontSize:18}}/>
                          <Text style={{fontSize:18}}>Customers</Text>
                        </Button>
                        <Button vertical
                       
                        >
                          <Icon name="phone" style={{fontSize:18, color:'#fff'}}/>
                          <Text style={{fontSize:18, color:'#fff'}}>Call Manage</Text>
                        </Button>
                      </FooterTab>
        </Footer>

      </Container>
    );
  }
}


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;



const styles = StyleSheet.create({
  footer: {
    backgroundColor:'#FFC300',
    justifyContent:'center', 
    alignItems:'center'
  },
  // btnSelected:{
  //   backgroundColor:{}
  // }

})

