import React from 'react';
import {
    View, Text, Button,TextInput, Dimensions,Alert,
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';




const UserInfo ={username:'Rajesh', password:'123456'}

export default class Login extends React.Component{

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
      }

constructor(props){
  super(props);
  this.state = {
   username: '',
   password: ''
  }
}


    render(){

        const {navigate} = this.props.navigation;


      return(
        
        <View style={{justifyContent:'center',alignItems:'center',marginTop:(DEVICE_HEIGHT)/3,marginLeft:80}}>
        <View>
          <View style={{width:(DEVICE_WIDTH)-80}}>
            <View style={{justifyContent:'center'}}>
            <Text style={{fontSize:24}}>Agent LogIn</Text>
            </View>
  
            <View style={{flexDirection:'column'}}>
            <View style={{flexDirection:'row',marginBottom:10,alignItems:'center'}}>
              <Text style={{fontSize:18}}>Name:</Text>
              <TextInput
            style={{borderBottomColor:'#1D57D8',borderBottomWidth:1,width:(DEVICE_WIDTH)/2,fontSize:18}}
            onChangeText={(username)=> this.setState({username})}
            value={this.state.username}
            autoCapitalize="none"
            />
            </View>
            <View style={{flexDirection:'row',marginBottom:10,alignItems:'center'}}>
              <Text style={{fontSize:18}}>E-mail:</Text>
              <TextInput
            style={{borderBottomColor:'#1D57D8',borderBottomWidth:1,width:(DEVICE_WIDTH)/2,fontSize:18}}
            onChangeText={(password)=> this.setState({password})}
            value={this.state.password}
            />
            </View>
          
            </View>
            
          </View>
         
         <View style={{flexDirection:'row',width:(DEVICE_WIDTH)/2,margin:10}}>
         <TouchableOpacity
          style={{backgroundColor:'#1D57D8', padding:10,borderRadius:3,justifyContent:'center',width:(DEVICE_WIDTH)/4,margin:10}}
          // onPress={() => this.login}
          onPress={() => navigate('IndexC')}
            >
            <Text style={{fontSize:18,color:"white"}}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={{backgroundColor:'#1D57D8', padding:10,borderRadius:3,justifyContent:'center',width:(DEVICE_WIDTH)/4,margin:10}}
          onPress={() => navigate('IndexC')}
           >
            <Text style={{fontSize:18,color:"white"}}>Sign Up</Text>
          </TouchableOpacity>
  
         </View>
  
        </View>
      </View>
      );
    } 

  login = async () => {
    if(UserInfo.username === this.state.username && UserInfo.password === this.state.password){
     
    Alert('LoggedIn');
    } else{
      Alert('Try again');
    }
    Alert('LoggedIn');
  }

  

  
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
