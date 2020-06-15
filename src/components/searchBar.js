import React, { Component } from "react";
import {
  ActivityIndicator,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { searchList, sortList } from "../actions/users";
import Styles from "../config/stylesheet";

class searchBar extends Component {
  render() {
    let { isFetching, text, sort } = this.props.users;
    return (
      <View style={Styles.searchBarContainer}>
        <View style={{ flex: 0.85 }}>
          <View style={Styles.searchBar}>
            <View style={Styles.searchBarLayout}>
              <View style={Styles.searchTextLayout}>
                <Icon name="search" size={22} color="#B8B8B8" />
                <TextInput
                  onChangeText={(text) => this.props.searchList(text)}
                  autoCapitalize="none"
                  value={text}
                  placeholder={"Search User"}
                  placeholderTextColor={"grey"}
                  underlineColorAndroid="transparent"
                  style={Styles.searchBarInput}
                />

                <View style={{ justifyContent: "center" }}>
                  {isFetching ? (
                    <ActivityIndicator
                      size="small"
                      color={"black"}
                      animating={isFetching}
                    />
                  ) : null}
                </View>
              </View>
            </View>
          </View>
        </View>
        <TouchableHighlight
          underlayColor={"#dedfe1"}
          style={[
            Styles.sortContainer,
            { backgroundColor: sort == null ? "#dedfe1" : "#5fc9f8" },
          ]}
          onPress={() => this.props.sortList()}
        >
          <Icon
            name={
              sort == null
                ? "sort"
                : sort == true
                ? "sort-amount-asc"
                : "sort-amount-desc"
            }
            size={30}
            color={sort == null ? "grey" : "white"}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

module.exports = connect(mapStateToProps, {
  searchList,
  sortList,
})(searchBar);
