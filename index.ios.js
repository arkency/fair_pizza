'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Pizza              = require('./Pizza');
var CuttingInstruction = require('./CuttingInstruction');
var PeopleCountPicker  = require('./PeopleCountPicker');

class FairPizza extends React.Component {
  constructor(props) {
    super(props);
    this.state = { peopleCount: 4 };
    this.setPeopleCount = this.setPeopleCount.bind(this);
    this.cuttingEdges = this.cuttingEdges.bind(this);
  }

  setPeopleCount(peopleCount) {
    this.setState({ peopleCount: peopleCount });
  }

  cuttingEdges() {
    return this.state.peopleCount * 2;
  }

  render() {
    return (
      <View style={styles.app}>
        {this.pizza()}
        {this.cuttingInstruction()}
        {this.peoplePicker()}
      </View>
    );
  }

  pizza() {
    return (
      <View style={styles.pizza}>
        <Pizza cuttingEdges={this.cuttingEdges()} />
      </View>
    );
  }

  cuttingInstruction() {
    return (
      <View style={styles.cuttingInstruction}>
        <CuttingInstruction
          cuttingEdges={this.cuttingEdges()}
          peopleCount={this.state.peopleCount}
        />
      </View>
    );
  }

  peoplePicker() {
    return (
      <View style={styles.peoplePickerWrapper}>
        <View style={styles.peoplePicker}>
          <PeopleCountPicker
            peopleCount={this.state.peopleCount}
            setPeopleCount={this.setPeopleCount}
          />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#C41D47',
  },
  pizza: {
    alignSelf: 'center',
    marginTop: 40
  },
  cuttingInstruction: {
    alignSelf: 'center',
    padding: 20,
    paddingTop: 0
  },
  peoplePickerWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  peoplePicker: {
    height: 95,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  }
});

AppRegistry.registerComponent('FairPizza', () => FairPizza);
