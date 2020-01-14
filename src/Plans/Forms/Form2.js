import React from 'react';
import {View,Text,StyleSheet,Image,Dimensions,ScrollView,TextInput,Button, KeyboardAvoidingView}from 'react-native';
import {Container, Content, Body, Left, Header, Icon,Form,Input,Item,Label} from 'native-base';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';


export default class Form1 extends React.Component{

    render(){
        return(
            <View style={styles.container}>
      
              <ScrollView>
                  <View >
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                          <Text style={styles.title}>Jeevan Anand</Text>
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
              <Label>Age (18-50)* :</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Terms (15 - 35)* :</Label>
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


