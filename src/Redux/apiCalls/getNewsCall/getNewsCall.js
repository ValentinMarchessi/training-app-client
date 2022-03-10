import { baseUrlDev } from '../../../config/requestMethod/publicRequest';
import { errorNews, startGetNews, successNews } from '../../reducers/newsReducer';

export const getNews = async (dispatch) => {
      dispatch(startGetNews());
      try {
            const result = await baseUrlDev.get('/news');
            dispatch(successNews(result.data));
      } catch (error) {
            dispatch(errorNews());
      };
};