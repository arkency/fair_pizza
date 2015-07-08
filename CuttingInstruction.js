'use strict'

let React = require('react-native');
let { StyleSheet, View, Text } = React;

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

let styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginTop: 35,
    textAlign: 'center',
    color: 'white'
  },
  textHighlighted: {
    fontWeight: 'bold'
  }
})

module.exports = CuttingInstruction;
