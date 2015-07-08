'use strict';

let React = require('react-native');
let { PickerIOS, StyleSheet } = React;
let PickerIOSItem = PickerIOS.Item;

class PeopleCountPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedValue: 1 };
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(value) {
    this.props.setPeopleCount(value);
  }

  render() {
    let pickerItems = [];
    for (var i = 2; i <= 5; i++) {
      pickerItems.push(<PickerIOSItem key={i} value={i} label={i.toString()} />);
    }

    return (
      <PickerIOS
        selectedValue={this.props.peopleCount}
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
    top: 60,
    backgroundColor: '#fff'
  }
});

module.exports = PeopleCountPicker;
