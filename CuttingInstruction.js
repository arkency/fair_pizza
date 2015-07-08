'use strict'

let React = require('react-native');
let { StyleSheet, View, Text } = React;
var Dimensions = require('Dimensions');

class CuttingInstruction extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          To cut pizza equally for <Text style={styles.textHighlighted}>{this.props.peopleCount} people</Text>, you
          have to cut pizza
          <Text style={styles.textHighlighted}> {this.props.cuttingEdges} times</Text> at equal angles.
        </Text>
        <Text style={styles.text}>
          All cuts need to cross in single point. It doesn't need to be in the
          center of the pizza.
        </Text>
      </View>
    )
  }
}

let isLegacy = () => {
  let window = Dimensions.get('window');
  return (window.height * window.scale) < 1100;
}

let isIphone5 = () => {
  let window = Dimensions.get('window');
  return (window.height * window.scale) < 1300;
}

let fontSize = () => {
  if (isLegacy()) {
    return 15;
  } else if (isIphone5()) {
    return 17;
  } else {
    return 20;
  }
}

let marginTop = () => {
  if (isLegacy()) {
    return 24;
  } else if (isIphone5()) {
    return 32;
  } else {
    return 42;
  }
}

let styles = StyleSheet.create({
  text: {
    fontSize: fontSize(),
    marginTop: marginTop(),
    textAlign: 'center',
    color: 'white'
  },
  textHighlighted: {
    fontWeight: 'bold'
  }
})

module.exports = CuttingInstruction;
