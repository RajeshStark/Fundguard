import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground
} from 'react-native';
import Carousel from 'react-native-anchor-carousel'; 

const { width } = Dimensions.get('window');

 
const data = [
  {
    uri : 'https://fundguard.in/img/p4.jpg'
   
  },
  {
    uri : 'https://fundguard.in/img/p8.jpg'
   
  },
  {
    uri : 'https://fundguard.in/img1/g7.jpeg'
   
  },
  {
    uri : 'https://fundguard.in/img1/g6.jpeg'
   
  },
  {
    uri : 'https://fundguard.in/img1/g5.jpeg'
   
  },
  {
    uri : 'https://fundguard.in/img1/g4.jpeg'
   
  },
  {
    uri : 'https://fundguard.in/img1/g3.jpeg'
   
  },
  {
    uri : 'https://fundguard.in/img1/g2.jpeg'
   
  },
  {
    uri : 'https://fundguard.in/img1/g1.jpeg'
   
  },
  {
    uri : 'https://fundguard.in/img/p5.jpg'
   
  },
  
];

export default class ImageCarousel extends Component {
  renderItem = ({ item, index }) => {
    const { uri } = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          this.numberCarousel.scrollToIndex(index);
        }}
      >
        <ImageBackground
          source={{ uri: uri }}
          style={styles.imageBackground}
        >
         
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <Carousel
        style={styles.carousel}
        data={data}
        loop={true}
        renderItem={this.renderItem}
        itemWidth={0.7 * width}
        inActiveOpacity={0.3}
        containerWidth={width - 10}
        ref={(c) => {
          this.numberCarousel = c;
        }}
      />
    );
  }
}
 
const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  item: {
    borderWidth: 1,
    backgroundColor: 'black',
    flex: 1,
    borderRadius: 5,
    borderColor: 'black',
    elevation: 3
  },
  imageBackground: {
    flex: 2,
    backgroundColor: 'black',
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 15,
  },

});
