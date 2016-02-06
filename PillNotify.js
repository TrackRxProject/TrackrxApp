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
            Pill Notifications
          </Text>
          <Text style={styles.instructions}>
            Take your medicine Grandma!
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
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = PillNotify