import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity,Button,Linking} from "react-native";
import {Container, Content, Body, Left, Header, Icon, Footer } from 'native-base';
import {ScrollView, TouchableHighlight} from 'react-native-gesture-handler'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {NavigationActions} from 'react-navigation';
import Paytm from './paytm'
import Fab from './ShareF';
import Footerbar from './Footer';

import EndownD from './Plans/EndownD'

class Premium extends React.Component{

  navigateToScreen = (Quote) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: Quote
    });
    this.props.navigation.dispatch(navigateAction);
  }


  
    render(){
      const {navigate} = this.props.navigation; 

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

                   {/* Premium Payment */}
                  <View style={{borderColor:'black',borderWidth:2}}> 
                  <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
                    <Text style={{fontSize:24,fontWeight:'bold', color:'blue',textDecorationLine:'underline'}}>Premium Payment</Text>
                  </View>
                  <View style={{margin:10}}>
                    <View  style={{margin:5}}>
                 <Text style={{color:'blue'}}>Now You Can Pay Your Premium Payment Through Paytm Or You Can Directly Pay From Official Lic Portal{"\n"} </Text>
                 <Text style={{color:'red'}}>Click The Following Buttons For Payment:</Text>
                 </View>
                 
                 <View style={{marginBottom:10}}>
                  <Button
                    title="Pay from Paytm"
                    onPress={() => navigate('Paytm')}
                 />

               
                </View>

                  <Button
                    title="Pay From LIC Portal"
                    onPress={() => Linking.openURL('https://www.licindia.in/Home/Pay-Premium-Online')}
                  />
                </View>
                </View> 
              {/* Premium Calculator */}
                <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
                    <Text style={{fontSize:24,fontWeight:'bold', color:'blue',textDecorationLine:'underline'}}>Premium Calculator</Text>
                  </View>

                 </Content>
                 <Content>
                 <View>
       <Text style={{margin:10,fontSize:16}}>
          Select Plan:
        </Text>
       </View>
        <TouchableOpacity
        style={styles.plan}
        onPress={this.navigateToScreen('EndownD')}
        >
          <Text style={{fontSize:18,color:'#fff'}}>Endownment Plan</Text>
        </TouchableOpacity>
                 </Content>
                 <View>
                 <Footerbar/> 
                </View>
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
  

head : {
  backgroundColor:'#228b22',
  padding:20,
  width:(DEVICE_WIDTH),
  justifyContent:'center',
  alignItems:'center',
//Shadow
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
  
 },
 gridd : {
  width:((DEVICE_WIDTH)/3)-10,
  height:140,
  borderRadius: 5,
  justifyContent:'center',
  
  //shadow
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
 },

 footer: {
  backgroundColor:'#FFC300',
  justifyContent:'center', 
  alignItems:'center'
},
plan:{
  backgroundColor:'green',
  justifyContent:'center',
  alignItems:'center',
  padding:10,
  borderRadius:2,
  margin:5
}


})



const MainNavigator = createStackNavigator({
  Premium: {
    screen: Premium,
    navigationOptions: {
      title: 'Main',
      header: null //this will hide the header
    },
  },

  
  Paytm : {
    screen: Paytm,
    navigationOptions: {
      title: 'Paytm',
      header: null //this will hide the header
    },
  },


  EndownD : {
    screen: EndownD,
    navigationOptions: {
      title: 'EndownD',
      header: null //this will hide the header
    },
  },

});

const MainPay = createAppContainer(MainNavigator);

export default MainPay;