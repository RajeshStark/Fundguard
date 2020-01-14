import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Linking,StyleSheet, PermissionsAndroid,TouchableOpacity } from 'react-native';
import { Content, Card, Fab, Button } from 'native-base';

import {NavigationActions} from 'react-navigation';

import CallLogs from 'react-native-call-log'


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

    // const {navigate} = this.props.navigation;

    if(this.state.isLoading){
      return(
        <View>
          <ActivityIndicator/>
        </View>
      )
    }
       

    return(
      <View >         
              <View style={{justifyContent:'space-around',alignItems:'center',flexDirection:'row',}}>
                              <Text style={{fontSize:24}}>Call Log Details</Text>
             </View>
                    <View style={{margin:5}}>
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
          <View style={styles.touch} 
               
           >
             <Text style={{fontSize:18}}
              //  onPress={() => this.props.navigation.navigate('AddProspect')}
              // onPress={() => navigate('AddProspect')}
             >P</Text>
           </View>

           <TouchableOpacity style={styles.touch} 
           onPress={()=>{Linking.openURL('tel:'+(item.phoneNumber));}}
          //   onPress={() => navigate('AddProspect')}
           >
             <Text style={{fontSize:18}}>C</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.touch} 
           onPress={()=>{Linking.openURL('tel:'+(item.phoneNumber));}} >
             <Text style={{fontSize:18}}>F</Text>
           </TouchableOpacity>
          
    
          </Card>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
    
    </View>           
      
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