import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RestaurantsList = ({ title }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: '800',
  },
});

export default RestaurantsList;
