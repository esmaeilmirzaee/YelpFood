import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer SxQW88NN51GO9eUjUjxpFwYIujYus-fvZUgWUzMfTcz_nANd0edvj_FioL34FqP6QcNS02wZ6jpQ40WBiNOcUXWL9DpXeoREX1JdmtCQaHBbnk4YQ4grGgY4UDx7X3Yx',
  },
});
