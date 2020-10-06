import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import RestaurantsDetail from './RestaurantsDetail';

const RestaurantsList = ({ title, restaurants }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>
        {title} ({restaurants.length})
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => {
          return <RestaurantsDetail restaurant={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: '800',
    marginLeft: 10,
  },
});

export default RestaurantsList;
