import axios from 'axios';
import {errorNews, successNews, startGetNews} from '../../reducers/newsReducer';
import { baseUrlDev } from '../../../config/requestMethod/publicRequest';

export const getNews = async ( dispatch )=>{
      dispatch(startGetNews());
      try {
            const result = await baseUrlDev.get('/news');
            console.log('Esto tiene result', result.data);
            dispatch( successNews(result.data));
      } catch (error) {
            dispatch(errorNews(error));
      };
};