import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from "react-native";
import {Container, Content, Card, CardItem, Body, Left, Header, Icon, Footer } from 'native-base';
import {ScrollView} from 'react-native-gesture-handler'
import Footerbar from './Footer';
import {NavigationActions} from 'react-navigation';
import {Divider} from 'react-native-elements';



export default class Mdrt extends React.Component{

  navigateToScreen = (Quote) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: Quote
    });
    this.props.navigation.dispatch(navigateAction);
  }
  
    render(){

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
                <View style={{justifyContent:'center', alignItems:'center', margin:10}}>
                  <View style={{justifyContent:'center', alignItems:'center', padding:10, backgroundColor: '#1D4E9E', width: (DEVICE_WIDTH)-20, borderRadius:5}}>
                    <Text style={{fontSize:18, color:'white'}}>Premium Condition</Text>
                  </View>
                  <View style={{padding:10}}>
                    <Text style={{padding:10, fontSize:16}}>MDRT : Rs. 39,95,600</Text>
                    <Divider style={{borderWidth:0.5}}/>
                    <Text style={{padding:10, fontSize:16}}>COT : Rs. 1,19,86,800</Text>
                    <Divider style={{borderWidth:0.5}}/>
                    <Text style={{padding:10, fontSize:16}}>TOT: Rs. 2,39,73,600</Text>
                  </View>

                  <View style={{justifyContent:'center', alignItems:'center', padding:10, backgroundColor: '#1D4E9E', width: (DEVICE_WIDTH)-20, borderRadius:5}}>
                    <Text style={{fontSize:18, color:'white'}}>Commission Condition</Text>
                  </View>
                  <View>
                    <Text style={{padding:10, fontSize:16}}>MDRT : Rs. 9,98,900</Text>
                    <Divider style={{borderWidth:0.5}}/>
                    <Text style={{padding:10, fontSize:16}}>COT : Rs. 29,96,700</Text>
                    <Divider style={{borderWidth:0.5}}/>
                    <Text style={{padding:10, fontSize:16}}>TOT: Rs. 59,93,400</Text>
                  </View>
               
                </View>
                <View>
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
  },


  footer: {
    backgroundColor:'#D35400',
    justifyContent:'center', 
    alignItems:'center',
    
  }
})