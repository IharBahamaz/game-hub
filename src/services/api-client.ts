import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '33f1484481e645ce91fcac4d9b547722',
  },
});
