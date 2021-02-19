import {Alert} from 'react-native';
import store from './store';

var context;
export default class ConnectionAPI {
  constructor() {
    context = this;
  }

  async fetchGet(url, callback) {
    let state = store.getState();
    let isConnected = state.users.isConnected;
    if (isConnected) {
      fetch(url)
        .then(response => response.json())
        .then(responseJson => {
          callback(responseJson);
        })
        .catch((error)=> {
          let errorMsg = JSON.stringify(error.message);
          let title = '';
          let desc = '';
          switch (errorMsg) {
            case '"Network Error"': {
              title = 'No Internet Connection';
              desc =
                'Connect your phone to the Internet by using an available Wi-Fi or cellular network.';
              break;
            }
            default: {
              title = 'Server Error';
              desc = 'Please try again later';
              break;
            }
          }

          Alert.alert(title, desc, [
            {text: 'Cancel', onPress: () => callback(null)},
            {
              text: 'Retry',
              onPress: () => context.fetchGet(url, callback),
            },
          ]);
        });
    } else {
      Alert.alert(
        'No Internet Connection',
        'Connect your phone to the Internet by using an available Wi-Fi or cellular network.',
        [
          {text: 'Cancel', onPress: () => callback(null)},
          {
            text: 'Retry',
            onPress: () => context.fetchGet(url, callback),
          },
        ],
      );
    }
  }
}
