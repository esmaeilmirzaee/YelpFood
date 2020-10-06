import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';

import useRestaurants from '../hooks/useRestaurants';

import RestaurantsList from '../components/RestaurntsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [fetchError, searchApi, results] = useRestaurants(term);

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

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
      <RestaurantsList
        restaurants={filterResultsByPrice('$')}
        title='Cost Effective'
      />
      <RestaurantsList
        restaurants={filterResultsByPrice('$$')}
        title='Bit Pricer'
      />
      <RestaurantsList
        restaurants={filterResultsByPrice('$$$')}
        title='Big Spender'
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
