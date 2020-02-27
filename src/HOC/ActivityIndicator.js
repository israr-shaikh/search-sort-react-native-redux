import React, {Component} from 'react';
import {Text, View, ActivityIndicator, StyleSheet} from 'react-native';

export default Comp => {
  return ({spinner, children, ...props}) => (
    <View style={{flex: 1}}>
      <Comp {...props}>{children}</Comp>
      {spinner && (
        <View
          style={[
            StyleSheet.absoluteFill,
            {backgroundColor: 'rgba(0, 0, 0, 0.7)', justifyContent: 'center'},
          ]}>
          <ActivityIndicator color={'white'} size="large" />
        </View>
      )}
    </View>
  );
};
