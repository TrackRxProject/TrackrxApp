'use strict';

var React = require('react-native');
var {
AppRegistry,
StyleSheet,
Component,
Text,
View,
Navigator,
TouchableOpacity,
} = React;

var HomeScreen = require('./HomeScreen');
var PillNotify = require('./PillNotify');
var AdherenceScreen = require('./AdherenceScreen');
var ActivateScreen = require('./ActivateScreen');
var SelectScreen = require('./SelectScreen');

class TrackrxApp extends Component {
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
