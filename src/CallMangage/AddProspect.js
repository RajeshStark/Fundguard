import React,{Component} from 'react';


import {
    View,Text, StyleSheet,
    Image,Linking, Alert,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { Container,Header, Content, Body, Left, Right,Footer, Card, FooterTab, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import OptionsMenu from "react-native-options-menu";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {NavigationActions} from 'react-navigation';
import DocumentPicker from 'react-native-document-picker';
import FilePickerManager from 'react-native-file-picker';


export default class AddProspect extends React.Component{
    // navigateToScreen = (route) => () => {
    //     const navigateAction = NavigationActions.navigate({
    //       routeName: route
    //     });
    //     this.props.navigation.dispatch(navigateAction);
    //   }

  constructor(props) {
    super(props);
    //Initialization of the state to store the selected file related attribute
   
    this.state = {
      singleFile: '',
      title: '',
      content: '',
      image: null
    };
  }

  

    render(){

        const showAlert = () =>{
            Alert.alert(
               'Your Profile Saved Successfully' 
            )
         }
        return(
            <Container>
                
                  <Header style={styles.header}>
                  <Left>
                  <Icon name='arrow-left' style={{fontSize:20,marginLeft:10,padding:10}}
                //   onPress={this.navigateToScreen('IndexC')} 
                  />
                 </Left>
                 <Body>
                     <Text style={{fontSize:18}}>Add Prospect</Text>
                 </Body>
                 <Right>
                 <Icon name='check' style={{fontSize:20, fontWeight:100,marginRight:10, padding:10}} 
                  onPress={showAlert}
                  />
                 </Right>
                  </Header>
                  <ScrollView>
                      <View>
                          <Content padder>
                              <View style={{justifyContent:'space-around',alignItems:'center',flexDirection:'row',}}>
                                  <Text style={{fontSize:24}}>Edit Prospect Details</Text>
                              </View>


                          </Content>
                      </View>
                  </ScrollView>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    
   header: {
       backgroundColor: '#fff',

   }
    
    });

    