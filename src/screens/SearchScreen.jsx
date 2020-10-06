import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';

import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [fetchError, setFetchError] = useState('');

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'montreal',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setFetchError(`Something wen wrong ${err}.`);
    }
  };

  return (
    <View>
      <SearchBar
        term={term}
        setTerm={setTerm}
        onTermSubmit={() => {
          searchApi();
        }}
      />
      {fetchError.length > 0 ? (
        <Text>{fetchError}</Text>
      ) : (
        <Text>We have found {results.length} results.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
