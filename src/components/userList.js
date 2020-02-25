import React, {Component} from 'react';
import {FlatList, Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {changePage} from '../actions/users';
import User from './user';
import Styles from '../config/stylesheet';

class UserList extends Component {
  render() {
    let {data, total, pageNum} = this.props.users;
    let {navigation} = this.props;
    return (
      <FlatList
        data={data.slice(pageNum * 6 - 6, pageNum * 6)}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={Styles.userSeprator}></View>}
        renderItem={({item, index}) => (
          <User navigation={navigation} item={item} />
        )}
        ListFooterComponent={
          data.length>0 ? (
          <View style={Styles.footerLayout}>
            <Button
              title={'< Previous'}
              disabled={pageNum > 1 ? false : true}
              onPress={() => this.props.changePage(false)}></Button>
            <Button
              title={'Next >'}
              disabled={total - pageNum * 6 > 0 ? false : true}
              onPress={() => this.props.changePage(true)}></Button>
          </View>
          ):null
        }
        ListEmptyComponent={
          <Text style={{textAlign: 'center'}}>No users avalable</Text>
        }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
  };
};

module.exports = connect(mapStateToProps, {
  changePage,
})(UserList);
