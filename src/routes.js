import React, {Component} from 'react';
import {Alert, BackHandler} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../src/screens/index';
import Profile from '../src/screens/profile';

var obj;
class routes extends Component {
  constructor(props) {
    super(props);
    obj = this;
  }


  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{headerShown: false}}
            component={Welcome}
          />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

module.exports = routes;
