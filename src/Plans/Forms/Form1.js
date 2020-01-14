import React from 'react';
import {View,Text,StyleSheet,Image,Dimensions,ScrollView,TextInput,Button, KeyboardAvoidingView}from 'react-native';
import {Container, Content, Body, Left, Header, Icon,Form,Input,Item,Label} from 'native-base';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';


export default class Form1 extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                {/* <Header style={{ backgroundColor: '#FBC707'}}>
               <Left>
             
               <Icon name='menu' style={{padding:20}}
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
              </Header> */}
              <ScrollView>
                  <View >
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                          <Text style={styles.title}>New Endownment</Text>
                      </View>    
<KeyboardAvoidingView>
                    <Form>
            <Item floatingLabel>
              <Label>Name:</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Date Of Birth:</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Age (8-55)* :</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Terms (12 - 35)* :</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Sum Assured (min 100000):</Label>
              <Input placeholder="min" />
            </Item>
          </Form>
                    <View  style={{justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity
                    style={{width:(DEVICE_WIDTH)/2,marginTop:10,justifyContent:'center',alignItems:'center',padding:10,backgroundColor:'#FBC707'}}
                    >
                        <Text style={{fontSize:16}}>Calculate Premium</Text>
                    </TouchableOpacity>
                    </View>

                    </KeyboardAvoidingView>
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
      marginTop: 10,
      textDecorationLine:'underline',
      fontWeight:'bold',
      color:'blue'

  }
});


