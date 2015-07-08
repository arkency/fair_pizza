'use strict'

let React = require('react-native');
let { StyleSheet, PixelRatio, Image } = React;

class Pizza extends React.Component {
  render() {
    return (
      <Image source={require('image!pizza')} style={styles.image} />
    )
  }
}

let styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  }
})

module.exports = Pizza;
