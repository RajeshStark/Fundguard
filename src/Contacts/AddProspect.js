import React,{Component} from 'react';


import {
    View,Text, StyleSheet,
    Image,Linking, Alert,
    TextInput
} from 'react-native';
import { Container,Header, Content, Body, Left, Right,Footer, Card, FooterTab, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import {NavigationActions} from 'react-navigation'


export default class AddProspect extends React.Component{
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
      }

  constructor(props) {
    super(props);
    //Initialization of the state to store the selected file related attribute
   
    this.state = {
      singleFile: '',
      title: '',
      content: '',
      image: null,
      name: '',
      phonenumber: ''
    };
  }  

  

    render(){
        const { navigation } = this.props;
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
                  onPress={this.navigateToScreen('IndexC')} 
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


<View>
                 <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{fontSize:18, marginRight:10}}>Name :</Text>
                                           <TextInput
                                              value={this.state.username}
                                              onChangeText={name => this.setState({ name })}
                                              placeholder= {(navigation.getParam('name', 'name'))}
                                              style={styles.input}
                                            />
             
                 </View>
                 <View style={{flexDirection:'row',alignItems:'center'}}>
                       <Text style={{fontSize:18, marginRight:10}}>Phone :</Text>
                                        <TextInput
                                         value={this.state.phonenumber}
                                         onChangeText={phonenumber => this.setState({ phonenumber })}
                                        placeholder= {(navigation.getParam('number', 'number'))}
                                        keyboardType="numeric"
                                         style={styles.input}
                                       />
        
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                       <Text style={{fontSize:18, marginRight:10}}>E-mail :</Text>
                                        <TextInput
                                         value={this.state.email}
                                         onChangeText={email => this.setState({ email })}
                                       //  placeholder={'Enter Prospect Email'}
                                         style={styles.input}
                                       />
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                       <Text style={{fontSize:18, marginRight:10}}>City   :</Text>
                                       <TextInput
                                         value={this.state.city}
                                         onChangeText={city => this.setState({ city })}
                                        //  placeholder={'Enter Prospect City'}
                                         style={styles.input}
                                       />
        
            </View>
                                
                                
                                
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

   },   
   input: {
      width: 200,
      height: 44,
      padding: 10,
      marginBottom: 10,
      borderBottomWidth:1,
      borderBottomColor:'blue',
   
  },
    
});
