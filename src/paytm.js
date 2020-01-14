import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Header, Content, Body, Left, Accordion, Icon, Footer } from 'native-base';
import { WebView } from 'react-native-webview';

// ...
export default class MyWebComponent extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
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
      <WebView source={{ uri: 'https://paytm.com/insurance-premium-payment/lic-of-india' }} style={{flex: 1}} />
      </View>
    );
  }
}