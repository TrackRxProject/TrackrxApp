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

class ActivateScreen extends Component {
  buttonClicked() {
    console.log('Button clicked');
    var request = new Request('http://trackrx.xyz:8000/prescription/1/activate', {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
    fetch(request, {
      method: 'POST',
      mode: 'cors',
      /*
      body: JSON.stringfy({
        uuid: '3'
      })
      */
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
            Activate Your Bottle Here
          </Text>
          <Text style={styles.instructions}>
            Get ya ultrasonic frequencies here!
          </Text>
        </View>
        <View style={styles.buttoncontainer}>
          <TouchableNativeFeedback style={styles.buttoncontainer} 
            onPress={this.buttonClicked.bind(this)}>
            <View>
              <Text style={styles.buttonText}>Activate Bottle</Text>
            </View>
          </TouchableNativeFeedback>
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
  buttoncontainer: {
    flex: 1,
    height: 40,
    marginVertical: 50,
    marginHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'MediumPurple',
  },
  buttonText: {
    fontSize: 20,
  },
});

module.exports = ActivateScreen
