import React from 'react';
import { FlatList, ActivityIndicator,Image, Text, View, Linking,StyleSheet, PermissionsAndroid,TouchableOpacity } from 'react-native';
import { Container,Header, Content, Body, Left, Right,Footer, Card, FooterTab, Button,Fab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import OptionsMenu from "react-native-options-menu";

import {NavigationActions} from 'react-navigation';

import CallLogs from 'react-native-call-log'

const MoreIcon = require("../../assets/images/dots-vertical.png");

export default class Calllog extends React.Component{
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  constructor(props) {
    super(props);
    //Make default blank array to store details
    this.state = {
      FlatListItems: [], 
      // active: false
    };
  } 

  
  componentDidMount = async () => {
    if (Platform.OS != 'ios') {
      try {
        //Ask for runtime permission
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
          {
            title: 'Call Log Example',
            message: 'Access your call logs',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          CallLogs.loadAll().then(c => this.setState({ FlatListItems: c }));
          CallLogs.load(3).then(c => console.log(c));
        } else {
          alert('Call Log permission denied');
        }
      } catch (e) {
        alert(e);
      }
    } else {
      alert(
        'Sorry! You can’t get call logs in iOS devices because of the security concern'
      );
    }
  };
 
  FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View
        style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }}
      />
    );
  };


  
  
  render(){

    const {navigate} = this.props.navigation;

    if(this.state.isLoading){
      return(
        <View>
          <ActivityIndicator/>
        </View>
      )
    }
       

    return(
      <View style={{flex: 1}}>
          <Header style={{ backgroundColor: '#FBC707'}}>
                  <Left>
                  <Icon name='bars' style={{fontSize:20, padding:10}}
                  onPress={() => this.props.navigation.openDrawer()} 
                  />
                 </Left>
                 <Body style={{alignItems:'center'}}>
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
                 <Right>
                 <OptionsMenu
                    button={MoreIcon}
                    buttonStyle={{ width: 32, height: 30, margin: 7.5, resizeMode: "contain" }}
                    destructiveIndex={1}
                    options={["Edit Profile", "Log Out","Frequent Calls","Delivery Report"]}
                    actions={[this.navigateToScreen('EditProfile'), this.deletePost, this.navigateToScreen('Frequent'), this.navigateToScreen('Report')]}/>
                   
                 </Right>
                  </Header>

              <Content padder>
              <View style={{justifyContent:'space-around',alignItems:'center',flexDirection:'row',}}>
                              <Text style={{fontSize:24}}>Call Log Details</Text>
                          </View>
                         
                <FlatList
      data={this.state.FlatListItems}
      ItemSeparatorComponent={this.FlatListItemSeparator}
      renderItem={({ item }) => (
        // Single Comes here which will be repeatative for the FlatListItems
        <View>
          <Card style={{flexDirection:'row', justifyContent:'space-around',alignItems:'center'}}>
            <View>
      <Text style={styles.item}>
        Name : {item.name ? item.name : 'Unknown Name'}{"\n"}
        Number : {item.phoneNumber}
      </Text>
          <Text style={styles.small}>
            DateTime : {item.dateTime}
            {'\n'}
            Type : {item.type} 
            {"\n"}
          </Text>
     
          </View>
          <TouchableOpacity style={styles.touch} 
            // onPress={() => navigate('AddProspect')}
            onPress={() =>
              navigate('AddProspect',{
                name: item.name,
                number: item.phoneNumber,
              })
            }
           >
             <Text style={{fontSize:18}}>P</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.touch} 
        //    onPress={()=>{Linking.openURL('tel:'+(item.phoneNumber));}}
            onPress={() => navigate('AddCustomer',{
              name: item.name,
              number: item.phoneNumber,
            })}
           >
             <Text style={{fontSize:18}}>C</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.touch} 
            onPress={() => navigate('Frequent')}
          //  onPress={()=>{Linking.openURL('tel:'+(item.phoneNumber));}} 
           >
             <Text style={{fontSize:18}}>F</Text>
           </TouchableOpacity>
          
    
          </Card>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
    
            </Content>
            <Footer>
                      <FooterTab style={{backgroundColor:"#5183ef"}}>
                        <Button 
                        onPress={() => navigate('IndexC')} >
                          <Icon name="globe" style={{fontSize:18}}/>
                          <Text style={{fontSize:18}}>prospect</Text>
                        </Button>
                        <Button vertical
                          onPress={() => navigate('Costumers')}
                          // onPress={() => navigate('Address')}
                        >
                          <Icon name="users" style={{fontSize:18}}/>
                          <Text style={{fontSize:18}}>Customers</Text>
                        </Button>
                        <Button vertical>
                          <Icon name="phone" style={{fontSize:18, color:'#fff'}}/>
                          <Text style={{fontSize:18, color:'#fff'}}>Call Manage</Text>
                        </Button>
                      </FooterTab>
        </Footer>
      
  </View>
    )
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
  },
 
  item: {
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 18,
  },
  small: {
    paddingLeft: 10,
    fontSize: 13,
    color:'grey'
  },
  touch:{
      width:30,
      height:30,
      borderRadius:20,
      borderColor:'black',
      borderWidth:2,
      // backgroundColor:'#5183ef',
      justifyContent:'center',
      alignItems:'center',
  }
});