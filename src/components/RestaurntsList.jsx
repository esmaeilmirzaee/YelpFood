import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RestaurantsList = ({ title, restaurants }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text># of restaurants: {restaurants.length}</Text>
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
