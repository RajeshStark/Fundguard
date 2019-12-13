/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions
} from 'react-native';

import ImageSlider from 'react-native-image-slider';

export default class App extends Component{
  render() {
    const images = [
      'https://fundguard.in/img1/amarbg.jpg',
      'https://fundguard.in/img1/labhbg.jpg',
      'https://fundguard.in/img1/tarunbg.jpg',
      
    ];

    return (
      <View style={styles.container}>
        <ImageSlider
          loop={true}
          autoPlayWithInterval={4000}
          images={images}
          onPress={({ index }) => alert(index)}
          customSlide={({ index, item, style, width }) => (
            // It's important to put style here because it's got offset inside
            <View
              key={index}
              style={[
                style,
                styles.customSlide,
                
              ]}
            >
              <Image source={{ uri: item }} style={styles.customImage} />
            </View>
          )}
          customButtons={(position, move) => (
            <View style={styles.buttons}>
              {images.map((image, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    underlayColor="#ccc"
                    onPress={() => move(index)}
                    style={styles.button}
                  >
                    <Text style={position === index && styles.buttonSelected}>
                      {index + 1}
                    </Text>
                  </TouchableHighlight>
                );
              })}
            </View>
          )}
        />
      </View>
    );
  }
}


const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    borderRadius: 10,
  },
  slider: {  height: 220,  },
  
  contentText: { color: '#fff' },
  buttons: {
    zIndex: 1,
    height: 15,
    marginTop: -25,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    margin: 3,
    width: 15,
    height: 15,
    opacity: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSelected: {
    opacity: 0,
    color: 'red',
  },
  customSlide: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customImage: {
    width:  (DEVICE_WIDTH) - 20,
    height: 200,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'black',
    borderWidth:0.5,
    borderRadius: 15
  },
});
