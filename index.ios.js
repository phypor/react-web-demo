'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  Image
} = React;

var ReactWebDemo = React.createClass({
  render: function() {
    return (
  <View style={styles.container}>
	         <Image
        style={styles.logo}
        source={{uri: 'https://avatars3.githubusercontent.com/u/12208097?v=3&s=460'}}
      />
        <Text style={styles.welcome}>
          Welcome to React Native！
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  logo:{width:60},
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

AppRegistry.registerComponent('reactWebDemo', () => ReactWebDemo);


if(Platform.OS == 'web'){
  var app = document.createElement('div');
  document.body.appendChild(app);

  AppRegistry.runApplication('reactWebDemo', {
    rootTag: app
  })
}
