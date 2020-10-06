import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';

import useRestaurants from '../hooks/useRestaurants';

import RestaurantsList from '../components/RestaurntsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [fetchError, searchApi, results] = useRestaurants(term);

  return (
    <View>
      <SearchBar
        term={term}
        setTerm={setTerm}
        onTermSubmit={(term) => {
          searchApi(term);
        }}
      />
      {fetchError.length > 0 ? (
        <Text>{fetchError}</Text>
      ) : (
        <Text>We have found {results.length} results.</Text>
      )}
      <RestaurantsList title='Cost Effective' />
      <RestaurantsList title='Bit Pricer' />
      <RestaurantsList title='Big Spender' />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
