import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';

import useRestaurants from '../hooks/useRestaurants';

import RestaurantsList from '../components/RestaurantsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errMessages] = useRestaurants();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        setTerm={setTerm}
        onTermSubmit={(term) => {
          searchApi(term);
        }}
      />
      {errMessages.length > 0 ? (
        <Text style={{ textAlign: 'center' }}>{errMessages}</Text>
      ) : (
        <Text style={{ textAlign: 'center' }}>
          We have found {results.length} results.
        </Text>
      )}
      <ScrollView>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
