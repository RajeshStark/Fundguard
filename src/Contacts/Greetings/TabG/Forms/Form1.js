import React from 'react';
import {View,Text,StyleSheet,Image,Dimensions,ScrollView,TextInput,Button, KeyboardAvoidingView}from 'react-native';
import {Container, Content, Body, Left, Header, Icon,Form,Input,Item,Label} from 'native-base';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Form1 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Day', 'Sent', 'Delivered', 'Failed'],
      tableData: [
        ['09/01\n/2020', '1000', '750', '250'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '34'],
        ['a', 'b', 'c', 'd']
      ]
    }
  }


    render(){
      const state = this.state;
      
        return(
            <View style={styles.container}>
              <ScrollView>
                  <View>
                      <View style={{justifyContent:'center',alignItems:'center',paddingBottom:10}}>
                          <Text style={styles.title}>Day Report</Text>
                      </View>    
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
            
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
    marginBottom:5,
    padding: 16,
     paddingTop: 30,
  },
  
  title: {
      fontSize:24,
      marginTop: 10,
      textDecorationLine:'underline',
      fontWeight:'bold',
      color:'blue'

  },
  
    head: {
       height: 40, backgroundColor: '#f1f8ff'
       },
    text: {
       margin: 6 
      }
  
});


