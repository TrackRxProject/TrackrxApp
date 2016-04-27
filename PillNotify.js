'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  Text,
  View,
  TouchableNativeFeedback
} from 'react-native';

class PillNotify extends Component {
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
