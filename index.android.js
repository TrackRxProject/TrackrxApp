/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback
} from 'react-native';

class TrackrxApp extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            TrackRx Helper Application
          </Text>
          <Text style={styles.instructions}>
            Tap a button below go to that view
          </Text>
        </View>

        <NavButton buttonTitle="Pill Notification" />
        <NavButton buttonTitle="Adherence History" />
        <NavButton buttonTitle="Register Bottle" />
        <NavButton buttonTitle="Select Bottle" />

      </View>
    );
  }
}

var NavButton = React.createClass({
  buttonClicked: function() {
    console.log('button clicked');
  },

  render: function() {
    return (
      <View style={styles.buttoncontainer}>
        <TouchableNativeFeedback
          style={styles.button}
          onPress={this.buttonClicked}>
          <View>
            <Text style={styles.buttonText}>{this.props.buttonTitle}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttoncontainer: {
    flex: 1,
    height: 40,
    marginVertical: 50,
    marginHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aqua',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 7,
    borderRadius: 2,
    fontSize: 20,
  }
});

AppRegistry.registerComponent('TrackrxApp', () => TrackrxApp);
