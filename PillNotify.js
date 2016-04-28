'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  Text,
  TextInput,
  View,
  TouchableNativeFeedback
} from 'react-native';

class PillNotify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  sendCode() {
    console.log("pin is" + this.state.text);
    var request = new Request('http://trackrx.xyz:8000/pin/1', {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
    fetch(request, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        pin: this.state.text
      })

    }).then(function(response) {
      return response.text()
    }).then(function(text) {
      console.log(text);
    });

  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Medication Reminder
          </Text>
        </View>
        <View>
          <Text style={styles.instructions}>
            Your prescription is ready to be dispensed.
          </Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder="Type your pin here"
            onChangeText={(text) => this.setState({text})}
            onSubmitEditing={this.sendCode.bind(this)}
            value={this.state.text}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'MediumPurple',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    fontSize: 36,
    color: '#333333',
    marginTop: 50,
  },
});

module.exports = PillNotify
