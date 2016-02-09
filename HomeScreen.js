/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
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

class HomeScreen extends Component {
  render() {
    return (
      <Navigator renderScene={this.renderScene.bind(this)}
        navigator={this.props.navigator}
      />
    );
  }
  renderScene(route, navigator) {
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

        <NavButton {...this.props} buttonTitle="Pill Notification" nextScreen="PillNotify"/>
        <NavButton {...this.props} buttonTitle="Adherence History" nextScreen="AdherenceScreen"/>
        <NavButton {...this.props} buttonTitle="Activate Bottle" nextScreen="ActivateScreen"/>
        <NavButton {...this.props} buttonTitle="Select Bottle" nextScreen="SelectScreen"/>

      </View>
    );
  }
}

class NavButton extends Component {
  buttonClicked() {
    this.props.navigator.push({
      id: this.props.nextScreen,
      name: this.props.buttonTitle
    });
  }

  render() {
    return (
      <View style={styles.buttoncontainer}>
        <TouchableNativeFeedback
          style={styles.button}
          onPress={this.buttonClicked.bind(this)}>
          <View>
            <Text style={styles.buttonText}>{this.props.buttonTitle}</Text>
          </View>
        </TouchableNativeFeedback>
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
  buttoncontainer: {
    flex: 1,
    height: 40,
    marginVertical: 50,
    marginHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'MediumPurple',
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

module.exports = HomeScreen
