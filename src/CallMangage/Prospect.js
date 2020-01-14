import React from 'react';
import {View,Text, FlatList, ActivityIndicator,Linking,Alert} from 'react-native';
import {Card,Fab,Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {NavigationActions} from 'react-navigation';

export default class Prospect extends React.Component{


  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }
   
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
      }



 componentDidMount(){
    return fetch('http://rajesh.orgfree.com/something.json')
      .then((response) => response.json())
      .then((responseJson) => {
 
        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



    render(){
      // const {navigate} = this.props.navigation;

        const showAlert = () =>{
            Alert.alert(
               'User Added' 
            )
         }
    
    
    
        if(this.state.isLoading){
          return(
            <View style={{flex: 1, padding: 20}}>
              <ActivityIndicator/>
            </View>
          )
        }

        return(
            <View style={{margin:10}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:24}}>
                    Prospect Details
                </Text>
            </View>
            
                <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
    <View>
         <Card >
                                 <View style={{margin:5}}>
                                  <Text style={{fontSize:18}}>
                                  Name: {item.name}{"\n"}Phone: {item.phonenumber}{"\n"}E-mail: {item.email}{"\n"}City: {item.city}
                                  </Text>
                                 </View> 
                                 <View style={{flexDirection:'row',justifyContent:'space-around',marginBottom:10}}>
                                     <Icon name='phone' style={{fontSize:18}}
                                          onPress={()=>{Linking.openURL('tel:'+(item.phonenumber));}} 
                                     />
                                     <Icon name='sms' style={{fontSize:18}}
                                       onPress={()=>{Linking.openURL('smsto:'+(item.phonenumber));}} 
                                     />
                                     <Icon name="envelope" style={{fontSize:18}}
                                      onPress={() => {
                                        Linking.openURL('mailto:'+(item.email));}}/>
                                     <Icon name='whatsapp' style={{fontSize:18}}
                                     onPress={() => {
                                        Linking.openURL('https://api.whatsapp.com/send?phone=' + (item.phonenumber));}}/>
                                      
                                     <Icon name='user-plus' style={{fontSize:18}}
                                     onPress={showAlert}
                                     />
                                     <Icon name='edit' style={{fontSize:18}}/>
                                     <Icon name='trash' style={{fontSize:18}}/>
                                 </View> 
                              </Card> 
                           
    </View>
    }
          keyExtractor={({id}, index) => id}
        />
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }} // #5067FF
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="plus" />
            <Button style={{ backgroundColor: '#5067FF' }}>
            <Icon name="user-plus" style={{fontSize:18,color:'#fff'}}  
                  // onPress={this.navigateToScreen('AddProspect')}
                  onPress={() => this.props.navigation.navigate('AddProspect')}
                  // onPress={() => this.navigateToScreen('AddProspect')}
            />
            </Button>
            <Button style={{ backgroundColor: '#5067FF' }}>
            <Icon name="file-excel" style={{fontSize:20,color:'#fff'}}
                //    onPress={this.selectOneFile.bind(this)}
            />
            </Button>
          </Fab>
            </View>
        )
    }
}