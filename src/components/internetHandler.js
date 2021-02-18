import NetInfo from '@react-native-community/netinfo';
import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {changeConnection} from '../actions/users';
import styles from '../config/stylesheet';

class OfflineNotice extends PureComponent {
  componentDidMount() {
   NetInfo.addEventListener(state => {
      this.handleConnectivityChange(state.isConnected)
    });
  }

  componentWillUnmount() {
    NetInfo.addEventListener(state => {
      this.handleConnectivityChange(state.isConnected)
    });
  }

  handleConnectivityChange = isConnected => {
    this.props.changeConnection(isConnected);
  };

  render() {
    console.log({isConnected});
    if (!this.props.isConnected) {
      return (
        <View style={styles.offlineContainer}>
          <Text style={styles.offlineText}>No Internet Connection</Text>
        </View>
      );
    }
    return null;
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

module.exports = connect(mapStateToProps, {changeConnection})(OfflineNotice);
