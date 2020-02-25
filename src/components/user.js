import React, {Component} from 'react';
import {
  Image,
  InteractionManager,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import Styles from '../config/stylesheet';

class User extends Component {
  gotoUser(item) {
    InteractionManager.runAfterInteractions(() => {
      this.props.navigation.push('Profile', {item});
    });
  }
  render() {
    let {item} = this.props;
    return (
      <TouchableHighlight
        onPress={() => this.gotoUser(item)}
        underlayColor={'grey'}>
        <View style={Styles.userContainer}>
          <View
            style={Styles.listLayout}>
            <Image source={{uri: item.avatar}} style={Styles.userImage} />
          </View>
          <View style={Styles.userNameLayout}>
            <Text style={Styles.userText}>
              {item.first_name} {item.last_name}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
  };
};

module.exports = connect(mapStateToProps, {})(User);
