import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';
export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errMessages, setErrMessages] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'montreal',
        },
      });
      setRestaurants(response.data.businesses);
    } catch (err) {
      setErrMessages(`There was something wrong. ${err}`);
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [errMessages, searchApi, restaurants];
};
