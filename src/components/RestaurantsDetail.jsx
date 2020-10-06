import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const RestaurantsDetail = ({ restaurant }) => {
  return (
    <View style={styles.parentStyle}>
      <Image style={styles.imageStyle} source={{ uri: restaurant.image_url }} />
      <Text style={styles.nameStyle}>{restaurant.name}</Text>
      <Text style={styles.infoStyle}>
        {restaurant.rating} starts, {restaurant.review_count} reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    marginBottom: 5,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  nameStyle: {
    fontWeight: 'bold',
  },
  infoStyle: {
    color: 'gray',
  },
});

export default RestaurantsDetail;
