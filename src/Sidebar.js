
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import "react-native-gesture-handler";
import {NavigationActions} from 'react-navigation';
import {StyleSheet, ScrollView, Text, View, Image, Linking, TouchableOpacity} from 'react-native';
import { Divider, SocialIcon, Badge   } from 'react-native-elements';
import { Footer } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import BlinkView from 'react-native-blink-view';


class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  constructor(props) {
    super(props);
    this.state = {showText: true};
 
    // Change the state every second 
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 
    // Define any blinking time.
    600);
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
              <View style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                 <Image style={{height:150, width:100}}
                 source={require('../assets/images/flogo.jpg')}
                 />
              </View>
              <Divider style={{ backgroundColor: 'black', borderWidth:1 }} />
            <TouchableOpacity style={styles.navSectionStyle} onPress={this.navigateToScreen('Home')}
            
            >
            <Icon name='home' style={{fontSize:30}} />
              <Text style={styles.navItemStyle}>
              Home
              </Text>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: 'black', borderWidth:0.7 }} />

            <TouchableOpacity style={styles.navSectionStyle} onPress={this.navigateToScreen('Services')}>
            <Icon name='list' style={{fontSize:30}} />
              <Text style={styles.navItemStyle} >
              Services
              </Text>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: 'black', borderWidth:0.7 }} />
            
            <TouchableOpacity style={styles.navSectionStyle}  onPress={this.navigateToScreen('PopularPlans')}
             
             >
             <Icon name='star' style={{fontSize:30}} />
               <View>
               <BlinkView delay={500}>
              <Badge
                status="error"
                value="Top"
                containerStyle={{ position: 'absolute', top: -4, right: -16 }}
               />
             </BlinkView>
               <Text style={styles.navItemStyle}>
               Popular Plans
               </Text>  
             
               </View>
             </TouchableOpacity>
             <Divider style={{ backgroundColor: 'black', borderWidth:0.7 }} />

            <TouchableOpacity style={styles.navSectionStyle} onPress={this.navigateToScreen('FinancialPlans')}>
            <Icon name='snowflake' style={{fontSize:30}} />
              <Text style={styles.navItemStyle} >
              Financial Planing
              </Text>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: 'black', borderWidth:0.7 }} />

            <TouchableOpacity style={styles.navSectionStyle}  onPress={this.navigateToScreen('Quote')}>
            <Icon name='quote-right' style={{fontSize:30}} />
              <Text style={styles.navItemStyle}>
              Get a Free Quote
              </Text>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: 'black', borderWidth:0.7 }} />

            <TouchableOpacity style={styles.navSectionStyle}  onPress={this.navigateToScreen('Refer')}>
            <Icon name='user' style={{fontSize:30}} />
              <Text style={styles.navItemStyle}>
              Refer a Friend
              </Text>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: 'black', borderWidth:0.7 }} />

            <TouchableOpacity style={styles.navSectionStyle} onPress={this.navigateToScreen('Contact')}>
            <Icon name='at' style={{fontSize:30}} />
              <Text style={styles.navItemStyle} >
              Contact Us
              </Text>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: 'black', borderWidth:0.7 }} />

            <TouchableOpacity style={styles.navSectionStyle} onPress={this.navigateToScreen('Other')}>
            <Icon name='info' style={{fontSize:30}} />
              <Text style={styles.navItemStyle} >
              More
              </Text>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: 'black', borderWidth:0.7 }} />

            <TouchableOpacity style={styles.navSectionStyle} onPress={this.navigateToScreen('Faq')}>
            <Icon name='question' style={{fontSize:30}} />
              <Text style={styles.navItemStyle} >
              Faq
              </Text>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: 'black', borderWidth:0.7 }} />

            <TouchableOpacity style={styles.navSectionStyle} onPress={this.navigateToScreen('Club')}>
            <Icon name='users' style={{fontSize:30}} />
              <Text style={styles.navItemStyle} >
               Club Membership
              </Text>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: 'black', borderWidth:0.7 }} />

            <TouchableOpacity style={styles.navSectionStyle} onPress={this.navigateToScreen('Mdrt')}>
            <Image style={{height:35,width:40,resizeMode:'stretch'}}
            source={require('../assets/images/MDRT.png')}/>
              <Text style={styles.navItemStyle} >
              MDRT\COT\TOT
              </Text>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: 'black', borderWidth:0.7 }} />
           
           
            </View>
        </ScrollView>
        <Footer style={{backgroundColor:'#fff',justifyContent:'flex-start'}}>
             <View style={{marginBottom:5}}>
               <Text style={{color:'#282828'}}>App Version : 1.0</Text>
              
               <TouchableOpacity 
                   onPress={() => {
                    Linking.openURL('https://nutantek.com/');}}>
                <Text style={{fontSize:16, textDecorationLine:'underline'}}>By Nutantek Solutions LLP</Text>
                 </TouchableOpacity>
             </View>
           </Footer>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1
      },
      navSectionStyle:{
      marginLeft:30,
      flexDirection:'row',
      padding:10
      },
      navItemStyle: {
        padding: 5,
        fontSize:15
      },
     
});

export default SideMenu;