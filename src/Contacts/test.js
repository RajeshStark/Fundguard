import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Linking,Alert  } from 'react-native';
import { Container,Header, Content, Body, Left, Right,Footer, Card, FooterTab, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  // componentDidMount(){
  //   return fetch('http://excelsheet.floreshospital.in/uploadExcel.php')
  //     .then((response) => response.json())
  //     .then((responseJson) => {

  //       this.setState({
  //         isLoading: false,
  //         dataSource: responseJson,
  //       }, function(){

  //       });

  //     })
  //     .catch((error) =>{ 
  //       console.error(error);
  //     });
  // }





  // componentDidMount(){
  //   return fetch('http://rajesh.orgfree.com/something.json')
  //     .then((response) => response.json())
  //     .then((responseJson) => {

  //       this.setState({
  //         isLoading: false,
  //         dataSource: responseJson.movies,
  //       }, function(){

  //       });

  //     })
  //     .catch((error) =>{
  //       console.error(error);
  //     });
  // }

 



  componentDidMount() {
 
     return fetch('http://pramod.freevar.com/fetchdata.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        
    })
})
.then((response) => response.json())
      .then((responseJson) => {
      //  let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function() {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render(){
     

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
      <View style={{flex: 1, paddingTop:5}}>
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
      </View>
    );
  }
}