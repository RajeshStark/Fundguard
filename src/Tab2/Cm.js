import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { Content } from 'native-base';
import Footerbar from '../Footer'

export default class Cm extends React.Component{

    render(){
        return(
            <Content >
              <View style={{margin:10}}>
                <View>
                 <Text style={styles.title}>ELIGIBILITY CONDITIONS</Text>
                <Text style={styles.body}>Minimum Net No.of Lives - 40 
                  Net No.of Lives OR No.of Lives In Force - 130/600 
                  Renewal Cmsn Paid - 2,10,000 
                  First Year Cmsn - 2,10,000
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>CAR ADVANCE/VEHICLE ADVANCE</Text>
                <Text style={styles.body}>Car Advance : Full purchase price OR last 2 yrs R.C. OR 6 lacs whichever is less
                  Motorcycle Advance : Full purchase price OR last 2 yrs R.C.
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 OFFICE ALLOWANCE
                 </Text>
                <Text style={styles.body}>
                50% of actual expenses OR 7.5% of RC+FYC OR Rs.35,000 whichever is less(Max 1 lac)
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 HOUSING LOAN
                 </Text>
                <Text style={styles.body}>
                18.50 lakhs(Basic Loan @ 5%)+21.50 lakhs(Extended Loan @ 9.5%)=40 lakhs
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
                Maximum Rs.6000
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 SALES PROMOTNL GIFT ITEMS  
                 </Text>
                <Text style={styles.body}>
                Rs.3000
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 LETTER HEADS AND ENVELOPS
                 </Text>
                <Text style={styles.body}>
                Rs.1000
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 VISITING CARDS
                 </Text>
                <Text style={styles.body}>
                Rs.250
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 GROUP INSURANCE SCHEME
                 </Text>
                <Text style={styles.body}>
                Rs.4,00,000
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 TRAVELLING EXPENSES AND OUT OF POCKET EXPENSES FOR ANNUAL CONVENTIONS
                 </Text>
                <Text style={styles.body}>
                Economy class AirFare/II Tier AC/III Tier AC Sleeper Fare And out of pocket expenses of Rs.3000
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 COMPUTER ADVANCE
                 </Text>
                <Text style={styles.body}>
                Full purchase price OR last yr R.c. OR 1 lac @9% in 60 installments
                </Text>
                </View>

                <View>
                 <Text style={styles.title}>
                 MHR LIMITS
                 </Text>
                <Text style={styles.body}>
                50 lacs
                </Text>
                </View>

                
                <View>
                 <Text style={styles.title}>
                 GMIS (Including Spouse Coverage)
                 </Text>
                <Text style={styles.body}>
                Rs.3,00,000
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