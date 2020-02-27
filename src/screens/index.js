import React, {Component} from 'react';
import {
  InteractionManager,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {getUserList} from '../actions/users';
import SearchBar from '../components/searchBar';
import UserList from '../components/userList';
import Styles from '../config/stylesheet';
import * as HOC from '../HOC';

const ScrollViewIndicator = HOC.ActivityIndicator(ScrollView);

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.props.getUserList(1, 12);
    });
  }

  render() {
    let {total} = this.props.users;
    let {navigation} = this.props;
    return (
      <SafeAreaView style={Styles.container}>
        <SearchBar />
        <View style={Styles.userTotal}>
          <Text>{total} Users </Text>
        </View>
        <ScrollViewIndicator
          spinner={this.props.users.isFetching}
          keyboardDismissMode={'on-drag'}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          style={{flex: 0.85}}>
          <UserList navigation={navigation} />
        </ScrollViewIndicator>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
  };
};

module.exports = connect(mapStateToProps, {
  getUserList,
})(Home);
