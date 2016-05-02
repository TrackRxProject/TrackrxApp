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

class AdherenceScreen extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Adherence Data
          </Text>
          <Text style={styles.instructions}>
            History of medication taken:
          </Text>
        </View>
        <View>
          <Text style={styles.table}>Monday       | O X O O | 3/4</Text>
          <Text style={styles.table}>Tuesday      | O X O O | 3/4</Text>
          <Text style={styles.table}>Wednesday  | O X O O | 3/4</Text>
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
  table: {
    fontSize: 28,
    textAlign: 'left',
    color: '#333333',
    marginBottom: 15,
  },
});

module.exports = AdherenceScreen
