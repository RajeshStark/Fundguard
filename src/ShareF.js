import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
import {Share} from 'react-native';

export default class FABExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'https://play.google.com/store/apps/details?id=com.fundguard'
          
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  
  render() {
      
    return (  
        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={this.onShare}>
            <Icon name="share" />
            {/* <Button style={{ backgroundColor: '#34A34F' }}
             onPress={this.onShare}
            >
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-skype" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-linkedin" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button> */}
          </Fab>
        </View>
    );
  }
}