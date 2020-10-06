import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const RestaurantsList = ({ title, restaurants }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>
        {title} ({restaurants.length})
      </Text>
      <FlatList
        horizontal
        data={restaurants}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => {
          return <Text style={{ marginRight: 25 }}>{item.name}</Text>;
        }}
      />
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
