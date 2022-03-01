import axios from 'axios';
import {errorNews, successNews, startGetNews} from '../../reducers/newsReducer';

export const getNews = async ( dispatch )=>{
      const url = 'http://localhost:8200/api/news';
      dispatch(startGetNews());
      try {
            const result = await axios.get(url);
            console.log('Esto tiene result', result.data);
            dispatch( successNews(result.data));
      } catch (error) {
            dispatch(errorNews(error));
      };
};