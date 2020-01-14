import React from 'react';
import {View, Text, StyleSheet,Dimensions} from 'react-native'
import { Container, Header,Left,Body, Tab, Tabs, ScrollableTab,Title, Segment, Content, Footer, FooterTab, Button,Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import OptionsMenu from "react-native-options-menu";

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import IndexG from './Greetings/IndexG';
import AddProspect from './AddProspect';
// import AddCustemor from './AddCustemor'; 

import EditProfile from './EditProfile';

import Tab1 from './Prospect';
import Tab2 from './Customer';
import Tab3 from './CallLog';

const MoreIcon = require("../../assets/images/dots-vertical.png");

class IndexC extends React.Component{

    constructor(props) {
        super(props);
        //Initialization of the state to store the selected file related attribute
       
        this.state = {
          active: false,
          singleFile: '',
          title: '',
          content: '',
          image: null
        };
      }

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
      }
    
      state = {
        activePage:1,
    }
    
    selectComponent = (activePage) => () => this.setState({activePage})
    
    _renderComponent = () => {
        if(this.state.activePage === 1)
          return <Tab1/> //... Your Component 1 to display
        if (this.state.activePage === 2) {
          return <Tab2/>
        } else {
          
        }
          return <Tab3/> // ... Your Component 2 to display
      }
    
    

    render(){
        return(
            <View>
                  <Header hasSegment style={{backgroundColor:'#FBC707'}} >
                  <Left>
                  <Icon name='arrow-left' style={{fontSize:20, padding:10}}
                  onPress={() => this.props.navigation.openDrawer()} 
                  />
                 </Left>
                 <View style={{justifyContent:'center'}}>
                 <Body style={{justifyContent:'center'}}>
                     <Segment style={{backgroundColor:'#FBC707'}} >
                      <Button first active={this.state.activePage === 1}
                               style={(this.state.btnSelected== 1)?styles.btnSelected:styles.notSelected}
                               onPress={this.selectComponent(1)}
                      >
                        <Text style={{fontSize:16, padding:10}}>Prospects</Text>
                      </Button>
                      <Button active={this.state.activePage === 2}
                              onPress={this.selectComponent(2)}>
                        <Text style={{fontSize:16, padding:10}}>Customer</Text>
                      </Button>
                      <Button active={this.state.activePage === 3}
                              onPress={this.selectComponent(3)}>
                        <Text style={{fontSize:16, padding:10}}>CallLog</Text>
                      </Button>
                    </Segment>
                 </Body>
                 </View>
                 
                 <Right>
                 <OptionsMenu
                    button={MoreIcon}
                    buttonStyle={{ width: 32, height: 30, margin: 7.5, resizeMode: "contain" }}
                    destructiveIndex={1}
                    options={["Edit Profile", "Log Out"]}
                    actions={[ this.deletePost]}/>
                   
                 </Right>
                  </Header>

       

        
                   <View>
                    {this._renderComponent()}
                    </View>
            </View>
        )
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    footer: {
      backgroundColor:'#fff',
      justifyContent:'center', 
      alignItems:'center'
    },
    // btnSelected:{
    //   backgroundColor:{}
    // }
    header: {
        backgroundColor:'#fff',
        borderRadius: 10,
        borderColor:'#fff',
        borderWidth:1,
        margin:10,
        shadowColor: "#000",
         shadowOffset: {
         	width: 0,
         	height: 2,
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         
         elevation: 5,
        
    }
  
  })


  const MainNavigator = createStackNavigator({
    IndexC: {
        screen:IndexC,
        navigationOptions: {
            header: null //this will hide the header 
        }
    },
     EditProfile : {
         screen: EditProfile,
         navigationOptions: {
            header: null //this will hide the header
        }
       },
     AddProspect : {
      screen: AddProspect,
      navigationOptions: {
         header: null //this will hide the header
     }
    },

});

const App = createAppContainer(MainNavigator);

export default App;