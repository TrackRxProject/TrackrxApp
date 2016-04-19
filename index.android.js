'use strict';

import React, {
  AppRegistry,
  StyleSheet,
  Component,
  Text,
  View,
  DeviceEventEmitter,
  Navigator,
  TouchableOpacity,
} from 'react-native';

import HomeScreen from  './HomeScreen';
import PillNotify from './PillNotify';
import AdherenceScreen from './AdherenceScreen';
import ActivateScreen from './ActivateScreen';
import SelectScreen from './SelectScreen';

import Notification from 'react-native-system-notification';
import GcmAndroid from 'react-native-gcm-android';

class TrackrxApp extends Component {
  componentDidMount() {
    GcmAndroid.addEventListener('register', function(token){
      console.log('send gcm token to server', token);
    });

    GcmAndroid.addEventListener('registerError', function(error){
      console.log('registerError', error.message);
    });

    GcmAndroid.addEventListener('notification', function(notification){
      console.log('receive gcm notification', notification);
      var info = JSON.parse(notification.data.info);
      if (!GcmAndroid.isInForeground) {
        Notification.create({
          subject: info.subject,
          message: info.message,
        });
      }
    });

    DeviceEventEmitter.addListener('sysNotificationClick', function(e) {
      console.log('sysNotificationClick', e);
    });

    GcmAndroid.requestPermissions();

  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'HomeScreen', name: 'HomeScreen'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
            return Navigator.SceneConfigs.FloatFromRight;
        }} />
    );
  }

  renderScene(route, navigator) {
    var routeId = route.id;

    switch(routeId) {
        case 'HomeScreen':
          return <HomeScreen navigator={navigator} />;
          break;
        case 'PillNotify':
          return <PillNotify navigator={navigator} />;
          break;
        case 'AdherenceScreen':
          return <AdherenceScreen navigator={navigator} />;
          break;
        case 'ActivateScreen':
          return <ActivateScreen navigator={navigator} />;
          break;
        case 'SelectScreen':
          return <SelectScreen navigator={navigator} />;
          break;
        default:
          return null;
    }
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TrackrxApp', () => TrackrxApp);
