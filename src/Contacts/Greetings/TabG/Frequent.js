import React from 'react';
import {View, Text} from 'react-native';
import {NavigationActions} from 'react-navigation';
import { Container,Header, Content, Body, Left, Right,Footer, Card, FooterTab, Button,Fab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Frequent extends React.Component{
  
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  
  render(){
       
    const {navigate} = this.props.navigation;
    
    return(
      <View>
         <Header style={{ backgroundColor: '#fff'}}>
                  <Left>
                  <Icon name='arrow-left' style={{fontSize:20, padding:10}}
                  // onPress={() => this.props.navigation.openDrawer()} 
                  onPress={() => navigate('IndexC')}
                  />
                 </Left>
                 <Body style={{alignItems:'center'}}>
                   <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center', alignContent:'center'}}>
                 {/* <Image 
                     style={{width:30, height:50, marginLeft: -30}}
                    source={require('../../assets/images/flogo.jpg')}
                     /> */}
                     <Text style={{fontSize:18, marginLeft: 20}}>
                       Frequent Calls
                     </Text>
                   </View>
                 </Body>
                 <Right>
                 {/* <OptionsMenu
                    button={MoreIcon}
                    buttonStyle={{ width: 32, height: 30, margin: 7.5, resizeMode: "contain" }}
                    destructiveIndex={1}
                    options={["Edit Profile", "Log Out","Frequent Calls","Delivery Report"]}
                    actions={[this.navigateToScreen('EditProfile'), this.deletePost, this.navigateToScreen('Frequent'), this.navigateToScreen('Report')]}/>
                    */}
                 </Right>
                  </Header>
        <Text
         onPress={this.navigateToScreen('AddProspect')}
        >Frequent</Text> 
      </View>
    )
  }
}