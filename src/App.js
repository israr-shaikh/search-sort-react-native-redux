import React, {Component} from 'react';
import Routes from './routes';
import {Provider} from 'react-redux';
import store from './config/store';
import Icon from 'react-native-vector-icons/FontAwesome';
import {enableScreens} from 'react-native-screens';

class App extends Component {
  render() {
    console.disableYellowBox = true;
    enableScreens();
    Icon.loadFont();
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

module.exports = App;
