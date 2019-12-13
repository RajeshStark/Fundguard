import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { Content } from 'native-base';
import Footerbar from '../Footer'

export default class Zm extends React.Component{

    render(){
        return(
            <Content >
              <View style={{margin:10}}>
                <View>
                 <Text style={styles.title}>ELIGIBILITY CONDITIONS</Text>
                <Text style={styles.body}>Minimum Net No.of Lives - 30 
                  Net No.of Lives OR No.of Lives In Force - 100/400 
                  Renewal Cmsn Paid - 1,47,000 
                  First Year Cmsn - 1,47,000
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>CAR ADVANCE/VEHICLE ADVANCE</Text>
                <Text style={styles.body}>Car Advance : Full purchase price OR last 2 yrs R.C. OR 5 lacs whichever is less
                  Motorcycle Advance : Full purchase price OR last 2 yrs R.C.
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 OFFICE ALLOWANCE
                 </Text>
                <Text style={styles.body}>
                50% of actual expenses OR 7.5% of RC+FYC OR Rs.22,000 whichever is less
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 HOUSING LOAN
                 </Text>
                <Text style={styles.body}>
                11.25 lakhs(Basic Loan @ 5%)+13.75 lakhs(Extended Loan @ 9.5%)=25 lakhs
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
                Maximum Rs.4000
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 SALES PROMOTNL GIFT ITEMS  
                 </Text>
                <Text style={styles.body}>
                Rs.2000
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 LETTER HEADS AND ENVELOPS
                 </Text>
                <Text style={styles.body}>
                Rs.700
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 VISITING CARDS
                 </Text>
                <Text style={styles.body}>
                Rs.200
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 GROUP INSURANCE SCHEME
                 </Text>
                <Text style={styles.body}>
                Rs.2,00,000
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 TRAVELLING EXPENSES AND OUT OF POCKET EXPENSES FOR ANNUAL CONVENTIONS
                 </Text>
                <Text style={styles.body}>
                Rail Fare I class/II Tier AC/III Tier AC Sleeper Fare And out of pocket expenses of Rs.1800
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
                30 lacs
                </Text>
                </View>

                
                <View>
                 <Text style={styles.title}>
                 GMIS (Including Spouse Coverage)
                 </Text>
                <Text style={styles.body}>
                Rs.2,00,000
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