/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var PeopleCountPicker = require('./PeopleCountPicker');
var FairPizza = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <PeopleCountPicker />
        <Text style={styles.welcome}>
          Welcome to React Native!!!
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C41D47',
  },
  welcome: {
    fontSize: 20,
    marginTop: 40,
    textAlign: 'center',
    margin: 5,
  },
});

AppRegistry.registerComponent('FairPizza', () => FairPizza);
