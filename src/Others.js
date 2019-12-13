import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  Linking,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import "react-native-gesture-handler";
import {Container, Content, Card, CardItem,Header, Body, Left,Icon, Footer} from 'native-base';
import { SocialIcon  } from 'react-native-elements'
import Footerbar from './Footer';
import {NavigationActions} from 'react-navigation';


export default class Home extends React.Component {


  
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
    <View>
    <Content padder>
          <View >   
            <Image style={styles.banner4} source={require('../assets/images/licinfo.jpg')}/>       
          </View>
        <View style={{justifyContent:'center',alignItems:'center',marginBottom:15}}>
              <Text style={{fontSize:25,fontWeight:'bold',color:'black',textDecorationLine:'underline'}}>News & Updates</Text>
            </View>

          <Card>
            <CardItem cardBody>
              <Image source={{uri: 'https://fundguard.in/img/licblog1.jpg'}} style={{height: 250, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <View>
              <Text style={{fontSize:20,}}>Pay Through eWallet</Text>
                <Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </Text>
              </View>
            </CardItem>
          </Card>

          <Card>
            <CardItem cardBody>
              <Image source={{uri: 'https://fundguard.in/img/licblog2.jpg'}} style={{height: 250, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <View>
              <Text style={{fontSize:20,}}>LIC Agent jobs</Text>
                <Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </Text>
              </View>
            </CardItem>
          </Card>

           <Card>
            <CardItem cardBody>
              <Image source={{uri: 'https://fundguard.in/img/licblog3.png'}} style={{height: 250, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <View>
              <Text style={{fontSize:20,}}>New Agent & DO App</Text>
                <Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </Text>
              </View>
            </CardItem>
          </Card> 

        </Content>
        
        <Content padder>
        <View style={{justifyContent:'center',alignItems:'center',marginBottom:15,marginTop:20}}>
              <Text style={{fontSize:25,fontWeight:'bold',color:'black',textDecorationLine:'underline'}}>Contact Info</Text>
            </View>
            <View>   
              <Image style={styles.lic} source={require('../assets/images/ram2.png')}/>       
            </View>


      </Content>
       </View>
       <View>
         <Footerbar/> 
       </View>
     </ScrollView>
     <TouchableOpacity
            onPress={this.navigateToScreen('Quote')}
          >
            <Footer style={styles.footer}>
            <Text style={{fontSize:24, fontWeight:'800', color:'#fff'}}>Become An LIC Agent</Text>
            </Footer>
      </TouchableOpacity>
    </Container>
  )
}
}


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  banner4:{
    width : (DEVICE_WIDTH)-20,
    height:200,
    alignItems: 'center',
    resizeMode:'stretch',
  }, 
  lic : {
    width : (DEVICE_WIDTH)-20,
    height:200,
    alignItems: 'center',
    resizeMode:'stretch',
    borderColor:'black',
    borderWidth:1,
    
  },
  
  button: {
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#FBC707',
    padding: 10,
    width: (DEVICE_WIDTH)-80,
    borderRadius:5,
    marginTop:20,
    shadowColor:'grey'
  },
  

footer: {
  backgroundColor:'#D35400',
  justifyContent:'center', 
  alignItems:'center'
}

});