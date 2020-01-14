import React from 'react';
import {View, Text, Dimensions, StyleSheet,TouchableOpacity} from 'react-native';
import { Container,Header, Content, Body, Left, Right,Footer, Card, FooterTab, Button,Fab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Form1 from './Forms/Form1'
import Form2 from './Forms/Form2'
import Form3 from './Forms/Form3'

export default class Report extends React.Component{

  state = {
    activePage:1,
}

selectComponent = (activePage) => () => this.setState({activePage})

_renderComponent = () => {
  if(this.state.activePage === 1)
    return <Form1/> //... Your Component 1 to display
  if (this.state.activePage === 2) {
    return <Form2/>
  } else {
    
  }
    return <Form3/> //... Your Component 2 to display
}

 
  
  render(){
      
    const {navigate} = this.props.navigation;
    
    return(
      <Content>
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
                       Delivery Report
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
        <View style={{flexDirection:'row', justifyContent:'space-around',alignItems:'baseline',marginTop:10}}>
          <Text style={{fontSize:20}}>Delivery Report : </Text>
            <View style={{flexDirection:'row', justifyContent:'center',marginTop:10}}>
                      <TouchableOpacity first active={this.state.activePage === 1}
                          style={(this.state.btnSelected== 1)?styles.btnSelected:styles.notSelected}
                                   onPress={this.selectComponent(1)}
                                   style={styles.card}
                                   >
                            <Text style={styles.txt}>Day</Text>
                          </TouchableOpacity>
                                   
                          <TouchableOpacity last active={this.state.activePage === 2}
                                  onPress={this.selectComponent(2)}
                                  style={styles.card}
                                  >
                            <Text style={styles.txt}>Week</Text>
                          </TouchableOpacity>
                
                          <TouchableOpacity first active={this.state.activePage === 1}
                          style={(this.state.btnSelected== 1)?styles.btnSelected:styles.notSelected}
                                   onPress={this.selectComponent(3)}
                                   style={styles.card}
                                   >
                            <Text style={styles.txt}>Month</Text>
                          </TouchableOpacity>
              </View>
         </View>
         {this._renderComponent()}
      </Content>
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
  
  title: {
      fontSize:24,
      fontWeight:'bold',
      color:'white'

  },
  card:{
   
    alignItems:'center',
    borderRadius:2,
    backgroundColor:'#1D57D8',
    marginRight:3,
    color:'white',
    paddingLeft:10,
    paddingRight:10,

    //Shadow
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.20,
shadowRadius: 1.41,

elevation: 2,
  },
txt:{
  color:'white',
  margin:5
},

});
