import React, {Component} from 'react';
import {Text, Image, View} from 'react-native';
import Styles from '../config/stylesheet';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let {first_name, last_name} = this.props.route.params.item;
    this.props.navigation.setOptions({
      title: `${first_name} ${last_name}`,
    });
  }

  render() {
    let {first_name, last_name, avatar, email} = this.props.route.params.item;
    console.log('test');
    return (
      <View style={Styles.container}>
          <View
            style={Styles.profileContainer}>
            <View
              style={Styles.imageLayout}>
              <Image
                source={{uri: avatar}}
                style={Styles.profileImage}
              />
            </View>
            <View style={Styles.textLayout}>
              <Text style={Styles.profileFont}>
                {first_name} {last_name}
              </Text>
              <Text style={{fontSize:18}} >
                {email}
              </Text>
            </View>
          </View>
      </View>
    );
  }
}
