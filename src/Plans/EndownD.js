import React from 'react';
import {View,Text,StyleSheet,Image,Dimensions,ScrollView,TextInput,Button, KeyboardAvoidingView}from 'react-native';
import {Container, Content, Body, Left, Header} from 'native-base';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Form1 from './Forms/Form1'
import Form2 from './Forms/Form2'
import Form3 from './Forms/Form3'

export default class EndownP extends React.Component{

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

//Increment
var n = -50;
function increment(){

  n =+ n+n;
  return n;
}


// Decrement
var m = 20;
function decrement(){

  m =+ m+m;
  return m;
}


        return(
            <View style={styles.container}>
                <Header style={{ backgroundColor: '#FBC707'}}>
               <Left>
             
               <Icon name='bars' style={{fontSize:20, padding:10}}
                  onPress={() => this.props.navigation.openDrawer()}
               />
          
              </Left>
              <Body>
              <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center', alignContent:'center'}}>
              <Image 
                  style={{width:30, height:50, marginLeft: -30}}
                 source={require('../../assets/images/flogo.jpg')}
                  />
                  <Text style={{fontSize:18, marginLeft: 20}}>
                    FundGuard
                  </Text>
                </View>
              </Body>
              </Header>
              <ScrollView>
                  <View >
                      <View  style={styles.plan}>
                          <Text style={styles.title}>Endownment Plans</Text>
                      </View>  
                      <Text>   Select Plan : </Text>
                     
            <View style={{flexDirection:'row',alignItems:'center'}}>
             {/* <Image
             source={require('../../assets/images/l-arrow.png')}
           
             style={{width:20,height:20}}
             /> */}
             <Icon name="caret-left"
             style={{fontSize:35, padding:10}}
               onPress={() => { this.refs.scroll.scrollTo({x: increment(), y: 0, animated: true}) }}
             />
                 <ScrollView 
                  horizontal={true} 
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled={true}
                  ref={'scroll'}
                  style={{borderRadius:5}}>
                  
          <TouchableOpacity first active={this.state.activePage === 1}
          style={(this.state.btnSelected== 1)?styles.btnSelected:styles.notSelected}
                   onPress={this.selectComponent(1)}
                   style={styles.card}
                   >
            <Text style={styles.txt}>New Endownment</Text>
          </TouchableOpacity>
                   
          <TouchableOpacity last active={this.state.activePage === 2}
                  onPress={this.selectComponent(2)}
                  style={styles.card}
                  >
            <Text style={styles.txt}>Jeevan anand</Text>
          </TouchableOpacity>

          <TouchableOpacity first active={this.state.activePage === 1}
          style={(this.state.btnSelected== 1)?styles.btnSelected:styles.notSelected}
                   onPress={this.selectComponent(3)}
                   style={styles.card}
                   >
            <Text style={styles.txt}>single Premium Endownment</Text>
          </TouchableOpacity>


          <TouchableOpacity first active={this.state.activePage === 1}
          style={(this.state.btnSelected== 1)?styles.btnSelected:styles.notSelected}
                   onPress={this.selectComponent(1)}
                   style={styles.card}
                   >
            <Text style={styles.txt}>Jeevan Rakshak</Text>
          </TouchableOpacity>

        
          <TouchableOpacity first active={this.state.activePage === 1}
          style={(this.state.btnSelected== 1)?styles.btnSelected:styles.notSelected}
                   onPress={this.selectComponent(1)}
                   style={styles.card}
                   >
            <Text style={styles.txt}>New Endownment</Text>
          </TouchableOpacity>
         
          <TouchableOpacity first active={this.state.activePage === 1}
          style={(this.state.btnSelected== 1)?styles.btnSelected:styles.notSelected}
                   onPress={this.selectComponent(1)}
                   style={styles.card}
                   >
            <Text style={styles.txt}>New Endownment</Text>
          </TouchableOpacity>
         
          </ScrollView>

          <Icon name="caret-right"
             style={{fontSize:35, padding:10}}
               onPress={() => { this.refs.scroll.scrollTo({x: decrement(), y: 0, animated: true}) }}
             />
          </View>
                    <View>
                    {this._renderComponent()}
                    </View>
                  </View>
              </ScrollView>
           
            </View>
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
  plan:{
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    borderRadius:3,
    margin:5,

    //Shadow
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
  card:{
   
    alignItems:'center',
    borderRadius:2,
    backgroundColor:'#1D57D8',
    marginRight:3,
    color:'white',

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
}

});


