'use strict'

let React = require('react-native');
let { StyleSheet, PixelRatio, Image } = React;
var Dimensions = require('Dimensions');

class Pizza extends React.Component {
  render() {
    return (
      <Image source={require('image!pizza')} style={styles.image} />
    )
  }
}

let screenHeight = Dimensions.get('window').height;

let styles = StyleSheet.create({
  image: {
    width: screenHeight * 0.35,
    height: screenHeight * 0.35
  }
})

module.exports = Pizza;
