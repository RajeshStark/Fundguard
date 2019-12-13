import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { Content } from 'native-base';
import Footerbar from '../Footer'

export default class Dm extends React.Component{

    render(){
        return(
            <Content >
              <View style={{margin:10}}>
                <View>
                 <Text style={styles.title}>ELIGIBILITY CONDITIONS</Text>
                <Text style={styles.body}>Minimum Net No.of Lives - 20 
                  Net No.of Lives OR No.of Lives In Force - 80/250 
                  Renewal Cmsn Paid - 95,000 
                  First Year Cmsn - 63,000
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>CAR ADVANCE/VEHICLE ADVANCE</Text>
                <Text style={styles.body}>Car Advance : Full purchase price OR last 2 yrs R.C. OR 6 lacs whichever is less
                Motorcycle Advance : Full purchase price OR last 2 yrs R.C. whichever is less
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 OFFICE ALLOWANCE
                 </Text>
                <Text style={styles.body}>
                50% of actual expenses OR 7.5% of RC+FYC OR Rs.12,000 whichever is less
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 HOUSING LOAN
                 </Text>
                <Text style={styles.body}>
                9 lakhs(Basic Loan @ 5%)+11 lakhs(Extended Loan @ 9.5%)=20 lakhs
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 FESTIVAL ADVANCE
                 </Text>
                <Text style={styles.body}>
                Rs.20,000
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 TELEPHONE FACILITY
                 </Text>
                <Text style={styles.body}>
                Maximum Rs.2400
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 SALES PROMOTNL GIFT ITEMS  
                 </Text>
                <Text style={styles.body}>
                Rs.1000
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 LETTER HEADS AND ENVELOPS
                 </Text>
                <Text style={styles.body}>
                Rs.500
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 VISITING CARDS
                 </Text>
                <Text style={styles.body}>
                Rs.150
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 GROUP INSURANCE SCHEME
                 </Text>
                <Text style={styles.body}>
                Rs.1,10,000
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 TRAVELLING EXPENSES AND OUT OF POCKET EXPENSES FOR ANNUAL CONVENTIONS
                 </Text>
                <Text style={styles.body}>
                Rail Fare I/II class AC And out of pocket expenses of Rs.400
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 COMPUTER ADVANCE
                 </Text>
                <Text style={styles.body}>
                Not Eligible
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 MHR LIMITS
                 </Text>
                <Text style={styles.body}>
                20 lacs
                </Text>
                </View>

                
                <View>
                 <Text style={styles.title}>
                 GMIS (Including Spouse Coverage)
                 </Text>
                <Text style={styles.body}>
                Rs.1,50,000
                </Text>
                </View>
              </View>
                <View>
                <Footerbar/>
              </View>

            </Content>
        )
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;


const styles = StyleSheet.create({
title :{
    fontSize:18,
    padding:5,
    borderRadius:5,
    backgroundColor:'#d0d0d0',
    fontWeight:'800'
   
},
body:{
    fontSize:16,
    padding:10,

}

})