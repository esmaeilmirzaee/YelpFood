import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import RestaurantsDetail from './RestaurantsDetail';

const RestaurantsList = ({ title, restaurants, navigation }) => {
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
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('RestaurantShow');
              }}
            >
              <RestaurantsDetail restaurant={item} />
            </TouchableOpacity>
          );
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
