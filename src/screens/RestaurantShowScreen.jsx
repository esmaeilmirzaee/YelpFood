import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import yelp from '../api/yelp';

// import { Entypo } from '@expo/vector-icons';

const RestaurantShowScreen = ({ navigation }) => {
  const [aRestaurant, setARestaurant] = useState(null);
  const id = navigation.getParam('id');

  console.log(`id is ${id}`);
  const getARestaurant = async (id) => {
    const response = await yelp.get(`/${id}`);
    setARestaurant(response.data);
  };

  useEffect(() => {
    getARestaurant(id);
  }, []);

  getARestaurant(id);

  console.log(aRestaurant);

  return (
    <View>
      <Text style={styles.restaurantTitle}>{aRestaurant.name}</Text>
      <View style={styles.phoneStyle}>
        {/* <Entypo name='old-phone' size={24} /> */}
        <Text style={{ marginLeft: 10 }}>{aRestaurant.display_phone}</Text>
      </View>
      <Text style={styles.addressStyle}>
        {aRestaurant.location.address1} - {aRestaurant.location.city} -{' '}
        {aRestaurant.location.country}
      </Text>
      <>
        <Image
          style={styles.photoStyle}
          source={{ uri: aRestaurant.photos[0] }}
        />
        <Image
          style={styles.phoneStyle}
          source={{ uri: aRestaurant.photos[1] }}
        />{' '}
        *
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  restaurantTitle: {
    fontWeight: '800',
    textAlign: 'center',
    margin: 20,
    fontSize: 30,
  },
  phoneStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  addressStyle: {
    margin: 10,
    fontStyle: 'italic',
    fontSize: 20,
    color: '#008fff',
    textAlign: 'center',
  },
  photoStyle: {
    width: 240,
    height: 120,
    borderRadius: 5,
  },
});

export default RestaurantShowScreen;
