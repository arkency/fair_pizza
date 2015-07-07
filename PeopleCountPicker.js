'use strict';

let React = require('react-native');
let { PickerIOS, StyleSheet, View } = React;
let PickerIOSItem = PickerIOS.Item;

class PeopleCountPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedValue: 1 };
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(value) {
    value = value.toString();
    this.setState({ selectedValue: value });
  }

  render() {
    let pickerItems = [];
    for (var i = 2; i <= 6; i++) {
      pickerItems.push(<PickerIOSItem key={i} value={i} label={i.toString()} />);
    }

    return (
      <PickerIOS
        selectedValue={this.state.selectedValue}
        key={this.state.selectedValue}
        onValueChange={this.onValueChange}
        style={styles.picker}
      >
        {pickerItems}
      </PickerIOS>
    );
  }
}

var styles = StyleSheet.create({
  picker: {
  }
});

module.exports = PeopleCountPicker;
