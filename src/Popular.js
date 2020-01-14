 import React, { Component } from 'react';
 import { View, Text, Left, Right, Body, Header, Icon, Button, Segment, Content, Accordion,  Thumbnail, List, ListItem, Separator ,Footer, Container } from 'native-base';
import {ScrollView, SafeAreaView, Image, Dimensions, StyleSheet , TextInput, Alert, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native'; 
import LinearGradient from 'react-native-linear-gradient';
import "react-native-gesture-handler";
import Footerbar from './Footer';
import {NavigationActions} from 'react-navigation';

import Fab from './ShareF';

    export default class Popular extends React.Component{

      navigateToScreen = (Quote) => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: Quote
        });
        this.props.navigation.dispatch(navigateAction);
      }



      constructor(props) {
 
        super(props)
     
        this.state = {
     
          name:'',
          phnumber: '',
          emailid: ''
     
        }
     
      }
    
    //Validation
    
    functionOne=()=>{
      const {name,phnumber,emailid} = this.state;
      if(name==""){
        //alert('please fill the first name');
        this.setState({Error: 'please fill the first name'});
      }
      else if(phnumber==""){
        this.setState({Error: 'please fill the phone number'});
      }
      else if(emailid==""){
      //  alert('please fill the last name');
          this.setState({Error: 'please fill your mail ID'});
      }
      
      else{
        //alert('thank you, your form is submitted successfully');
    
        this.UserRegistrationFunction();
      
    
      }
    }
    
    // Validation End
    
       
          UserRegistrationFunction = () =>{
     
            const { name }  = this.state ;
            const { phnumber }  = this.state ;
            const { emailid }  = this.state ;
    
          fetch('http://pramod.freevar.com/userregistration/feelfreetocontact.php', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
           
              name: name,
              phnumber: phnumber,
              emailid: emailid
           
            })
           
          }).then((response) => response.json())
                .then((responseJson) => {
           
          // Showing response message coming from server after inserting records.
                  Alert.alert(responseJson);
           
                }).catch((error) => {
                  console.error(error);
                });
           
           
            }
          
    
        render(){
            return(
              <Container>
    
             <Header  hasSegment style={{ backgroundColor: '#FBC707'}}>
             <Left>
       
            <Icon name='menu' style={{padding:20}}
            onPress={() => this.props.navigation.openDrawer()}
          />
    
        </Left>
        <Body>
          <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center', alignContent:'center'}}>
        <Image 
            style={{width:30, height:50, marginLeft: -30}}
           source={require('../assets/images/flogo.jpg')}
            />
            <Text style={{fontSize:18, marginLeft: 20}}>
              FundGuard
            </Text>
          </View>
        </Body>
         </Header>
         <ScrollView>
           <Content padder>
             <ScrollView>
           <View >
           <LinearGradient 
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
           <Collapse >
      <CollapseHeader style={{justifyContent:'center',alignItems:'center',borderWidth:0.5,borderRadius:5}}>
        <Separator style={{backgroundColor: 'transparent'}}>
          <Text style={{fontSize:22, fontWeight:'200',color:'white'}}>JEEVAN LABH</Text>
        </Separator>
      </CollapseHeader>
      <CollapseBody>
        <ListItem >
          <Text style={{color:'white'}}>LIC's Jeevan Labh is a limited premium paying, non-linked, with-profits endowment plan which offers a combination of protection and savings. 
            This plan provides financial support for the family in case of unfortunate death of the policyholder any time before maturity and a lump sum amount at the time of maturity for the surviving policyholder. 
            This plan also takes care of liquidity needs through its loan facility.
         </Text>
        </ListItem>
        <ListItem last>
          <View style={{flexDirection:'column'}}>
          <Text style={{fontSize:20,color:'white'}}>1. Benefits: </Text>
          <Text style={{fontSize:15,color:'white'}}>Death benefit</Text>
          <Text style={{color:'white'}}>In case of death during the policy term, provided all due premiums have been paid, Death benefit, defined as sum of "Sum Assured on Death",vested Simple Reversionary Bonuses and Final Additional bonus, if any,
             shall be payable. Where, "Sum Assured on Death" is defined as the higher of 10 times of annualised premium or Absolute amount assured to be paid on death i.e. Basic Sum Assured . This death benefit shall not be less than 105% of all the premiums paid as on date of death.
            Premiums referred above shall not include any taxes, extra amount chargeable under the policy due to underwriting decision and rider premium(s), if any.
          </Text>
          <Text style={{fontSize:15,color:'white'}}>Maturity benefit</Text>
          <Text style={{color:'white'}}>"Sum Assured on Maturity" equal to Basic Sum Assured, along with vested Simple Reversionary bonuses and Final Additional bonus, if any,
             shall be payable in lump sum on survival to the end of the policy term provided all due premiums have been paid. Participation in Profits: The policy shall participate in profits of the Corporation and shall be entitled to receive Simple Reversionary Bonuses declared as per the experience of the Corporation,
             provided the policy is in full force. Final (Additional) Bonus may also be declared under the policy in the year when the policy results into a claim either by death or maturity.
          </Text>
          <Text style={{fontSize:20,color:'white'}}>2. Optional Benefit:</Text>
          <Text style={{color:'white'}}>The policyholder has an option of availing the following Rider benefit(s):LIC's Accidental Death and Disability Benefit Rider (UIN: 512B209V01)LIC's New Term Assurance Rider (UIN: 512B210V01) Rider sum assured cannot exceed the basic sum assured. For more details on the above riders, refer to the rider brochure or contact LIC'snearest Branch Office.
          </Text>
          </View>
        </ListItem>
      </CollapseBody>
    </Collapse>
    </LinearGradient>
    <LinearGradient 
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
    <Collapse style={{borderColor:'black', borderWidth:0.5, borderRadius:5}}>
      <CollapseHeader style={{justifyContent:'center',alignItems:'center', borderWidth:0.5,borderRadius:5}}>
        <Separator style={{backgroundColor:'transparent'}}>
          <Text style={{fontSize:22, fontWeight:'200', color:'white'}}>JEEVAN LAKSHYA</Text>
        </Separator>
      </CollapseHeader>
      <CollapseBody>
        <ListItem >
          <Text style={{color:'white'}}>LIC's Jeevan Lakshya is a participating non-linked plan which offers a combination of protection and savings.
             This plan provides for Annual Income benefit that may help to fulfill the needs of the family, primarily for the benefit of children, 
             in case of unfortunate death of Policyholder any time before maturity and a lump sum amount at the time of maturity irrespective of survival of the Policyholder.
             This plan also takes care of liquidity needs through its loan facility.
         </Text>
        </ListItem>
        <ListItem last>
          <View style={{flexDirection:'column'}}>
          <Text style={{fontSize:20,color:'white'}}>1. Benefits: </Text>
          <Text style={{fontSize:15,color:'white'}}>Death benefit</Text>
          <Text style={{color:'white'}}>On death of the Life Assured before the stipulated Date of Maturity provided the policy is in full force by paying upto-date premiums,
             Death Benefit, defined as sum of “Sum Assured on Death”, vested Simple Reversionary Bonuses and Final Additional Bonus, if any, shall be payable.
              Where “Sum Assured on Death” is defined as the sum of: Annual Income Benefit equal to 10% of the Basic Sum Assured, which shall be payable from the policy anniversary coinciding with or following the date of death of Life Assured,
               till the policy anniversary prior to the date of maturity.Assured Absolute Amount equal to 110% of Basic Sum Assured, which shall be payable on due date of maturity; and The vested Simple Reversionary Bonuses and Final Additional Bonus,
             if any, included in the Death Benefit, shall be payable on due date of maturity.
          </Text>
          <Text style={{color:'white'}}>
          The Death Benefit defined above shall not be less than 105% of all the premiums paid as on date of death. Premiums referred above exclude tax, extra premium and rider premium(s), if any.
          </Text>
          <Text style={{fontSize:15,color:'white'}}>Maturity benefit</Text>
          <Text style={{color:'white'}}>“Sum Assured on Maturity” equal to Basic Sum Assured, along with vested Simple Reversionary bonuses and Final Additional bonus, if any, shall be payable in lump sum on survival to the end of the policy term provided all due premiums have been paid.
             Participation in Profits: The policy shall participate in profits of the Corporation and shall be entitled to receive Simple Reversionary Bonuses declared as per the experience of the Corporation, provided the policy is in full force.
              In case of death under a policy which is in full force, the policy shall continue to participate in profits upto the date of maturity and the entire vested Simple Reversionary Bonuses and Final Additional Bonus, if any, shall be payable on due date of maturity. Hence, the Simple Reversionary Bonus and Final Additional Bonus, if any,
               shall be payable under the policy on due date of maturity irrespective of survival of the Life Assured. In case the premiums are not duly paid (except in case of death of the Life Assured under inforce policy), the policy shall cease to participate in future profits irrespective of whether or not the policy has acquired paid up value.
                However, the policy shall be considered as inforce on death during the grace period. Final Additional Bonus shall not be payable under reduced paid-up policies.
          </Text>
          <Text style={{fontSize:20,color:'white'}}>2. Optional Benefit:</Text>
          <Text style={{color:'white'}}>The policyholder has an option of availing the following Rider benefit(s): » LIC’s Accidental Death and Disability Benefit Rider (UIN: 512B209V01) » LIC’s New Term Assurance Rider (UIN: 512B210V01) Rider Sum Assured cannot exceed the Basic Sum Assured. For more details on the above Riders, refer to the Rider brochure or contact LIC’s nearest Branch Office.
            Annual Income Benefit equal to 10% of the Basic Sum Assured, which shall be payable from the policy anniversary coinciding with or following the date of death of Life Assured, till the policy anniversary prior to the date of maturity.Assured Absolute Amount equal to 110% of Basic Sum Assured, which shall be payable on due date of maturity
          </Text>
          </View>
        </ListItem>
      </CollapseBody>
    </Collapse>  
  </LinearGradient>

  <LinearGradient 
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
         <Collapse style={{borderColor:'black', borderWidth:0.5, borderRadius:5}}>
      <CollapseHeader style={{justifyContent:'center',alignItems:'center',borderRadius:5, borderWidth:0.5}}>
        <Separator style={{backgroundColor:'transparent'}}>
          <Text style={{fontSize:22, fontWeight:'200', color:'white'}}>JEEVAN UMANG</Text>
        </Separator>
      </CollapseHeader>
      <CollapseBody>
        <ListItem >
          <Text style={{color:'white'}}>LIC’s Jeevan Umang plan offers a combination of income and protection to your family.
             This plan provides for annual survival benefits from the end of the premium paying term till maturity and a lump sum payment at the time of maturity or on death of the policyholder during the policy term.In addition, this plan also takes care of liquidity needs through loan facility.
         </Text>
        </ListItem>
        <ListItem last>
          <View style={{flexDirection:'column'}}>
          <Text style={{fontSize:20,color:'white'}}>1. Benefits: </Text>
          <Text style={{fontSize:15,color:'white'}}>Death benefit</Text>
          <Text style={{color:'white'}}>Death Benefit, defined as sum of “Sum Assured on Death” and vested Simple Reversionary Bonuses (as mentioned in 2 below) and Final Additional bonus, if any,
             shall be payable.Where “Sum Assured on Death” is defined as the highest of 10 times of annualised premium; or Sum Assured on Maturity; or Absolute amount assured to be paid on death,
              i.e. Basic Sum Assured.This death benefit shall not be less than 105% of all the premiums paid as on date of death.Premiums referred above shall not include any taxes, extra amount chargeable under the policy due to underwriting decision and rider premium(s), if any.
          </Text>
          <Text style={{fontSize:15,color:'white'}}>Survival Benefit :</Text>
          <Text style={{color:'white'}}>On the life assured surviving to the end of the premium paying term, provided all due premiums have been paid, a survival benefit equal to 8% of Basic Sum Assured shall be payable each year.
             The first survival benefit payment is payable at the end of premium paying term and thereafter on completion of each subsequent year till the Life assured survives or till the policy anniversary prior to the date of maturity, whichever is earlier.
          </Text>
          <Text style={{fontSize:15,color:'white'}}>Maturity benefit</Text>
          <Text style={{color:'white'}}>On the life assured surviving to the end of the policy term, provided all due premiums have been paid, “Sum Assured on Maturity” along with vested Simple Reversionary Bonuses (as mentioned in 2 below) and Final Additional bonus, 
            if any, shall be payable.Where “Sum Assured on Maturity” is equal to Basic Sum Assured.
          </Text>
          <Text style={{fontSize:20,color:'white'}}>2. Optional Benefit:</Text>
          <Text style={{color:'white'}}>
          The policyholder has an option of availing following Rider benefit(s):LIC’s Accidental Death and Disability Benefit Rider (UIN: 512B209V01).LIC’s Accident Benefit Rider (UIN:512B203V02)LIC’s New Term Assurance Rider (UIN: 512B210V01)LIC’s New Critical Illness Benefit Rider (UIN: 512A212V01)
          </Text>
          </View>
        </ListItem>
      </CollapseBody>
    </Collapse>
</LinearGradient>

<LinearGradient 
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
    <Collapse style={{borderColor:'black', borderWidth:0.5, borderRadius:5}}>
      <CollapseHeader style={{justifyContent:'center',alignItems:'center',borderRadius:5, borderWidth:0.5}}>
        <Separator style={{backgroundColor:'transparent'}}>
          <Text style={{fontSize:22, fontWeight:'200', color:'white'}}>JEEVAN AMAR</Text>
        </Separator>
      </CollapseHeader>
      <CollapseBody>
        <ListItem last >
          <Text style={{color:'white'}}>LIC’s Jeevan Amar plan is a Non-Linked, Without Profit, pure protection plan. The plan offers the flexibility to choose from two death benefit options viz: Level Sum Assured and increasing Sum Assured. Under this plan,
             there are two categories of premium rates viz (1) Non-Smoker rates and (2) Smoker rates. Also lower premium rates will be available for female proposers. The policyholder has the option to choose from Single, Regular and Limited Premium payment option.
              The plan also offers the flexibility to choose death benefit payment either as a lump sum payment and/or in installments. LIC’s Jeevan Amar, being a pure protection plan,
             offers life cover to the policyholder at a very affordable price and ensures financial support for the family in case of unfortunate death of the policyholder during the policy term.
         </Text>
        </ListItem>
       
      </CollapseBody>
    </Collapse>
  </LinearGradient>


  <LinearGradient 
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
    <Collapse style={{borderColor:'black', borderWidth:0.5,borderRadius:5}}>
      <CollapseHeader style={{justifyContent:'center',alignItems:'center', borderRadius:5, borderWidth:0.5}}>
        <Separator style={{backgroundColor:'transparent'}}>
          <Text style={{fontSize:22, fontWeight:'200', color:'white'}}>JEEVAN TARUN</Text>
        </Separator>
      </CollapseHeader>
      <CollapseBody>
        <ListItem >
          <Text style={{color:'white'}}>LIC's JEEVAN TARUN is a participating non-linked limited premium payment plan which offers an attractive combination of protection and saving features for children. This plan is specially designed to meet the educational and other needs of growing children through annual Survival Benefit payments from ages 20 to 24 years and Maturity Benefit at the age of 25 years.
             It is a flexible plan wherein at proposal stage the proposer can choose the proportion of Survival Benefits to be availed during the term of the policy as per the following four options:
         </Text>
        </ListItem>
        <ListItem last>
          <View style={{flexDirection:'column'}}>
          <Text style={{fontSize:20,color:'white'}}>1. Benefits: </Text>
          <Text style={{fontSize:15,color:'white'}}>Death benefit</Text>
          <Text style={{color:'white'}}>On death during the policy term (before commencement of risk): In case of death of the Life Assured,
             return of premium/s paid excluding taxes, extra premium and rider premium, if any, without interest shall be payable.
          </Text>
          <Text style={{color:'white'}}>
          On death during the policy term (after commencement of risk): In case of death during the policy term provided all due premiums have been paid Death Benefit, defined as sum of “Sum Assured on Death” and vested Simple Reversionary Bonuses and Final Additional Bonus, if any, shall be payable.
           Where “Sum Assured on Death” is defined as Higher of 10 times of annualized premium or Absolute amount Assured to be paid on Death i.e. 125% Sum Assured.
          </Text>
          <Text style={{fontSize:15 ,color:'white'}}>Survival Benefit</Text>
          <Text style={{color:'white'}}>
          A fixed percentage of Sum Assured shall be payable on each policy anniversary coinciding with or immediately following the completion of 20 years of age and thereafter on each of next four policy anniversaries. 
          These fixed percentages shall depend on the Option chosen at the proposal stage and for various Options the percentages
          </Text>
          </View>
        </ListItem>
      </CollapseBody>
    </Collapse>
</LinearGradient>
     
      </View>
    
</ScrollView>
     </Content>
     <Content>
     <Footerbar/>
   
     </Content>
     
         </ScrollView>
         <View>
           <Fab/>
         </View>
        
         <TouchableOpacity
            onPress={this.navigateToScreen('Quote')}
          >
            <Footer style={styles.footer}>
            <Text style={{fontSize:24, fontWeight:'800'}}>Get In Touch</Text>
            </Footer>
      </TouchableOpacity>
    
        </Container>
            );
        }
    } 
    <AccordionList
    
    header={this._head}
    body={this._body}
  />

    const DEVICE_WIDTH = Dimensions.get('window').width;
    const DEVICE_HEIGHT = Dimensions.get('window').height;
    
    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#fff',
      },
      linearGradient: {
        borderRadius: 5,
        width: (DEVICE_WIDTH)-20,
      },
      TextInputStyleClass: {
   
        textAlign: 'center',
        marginBottom: 20,
        height: 40,
        borderWidth: 1,
        borderColor: '#2196F3',
        borderRadius: 5 ,
        },
        footer: {
          backgroundColor:'#FFC300',
          justifyContent:'center', 
          alignItems:'center'
        }
    
    });