import axios from 'axios';
import { ApiRequest } from '../../utils/AxiosUtils';
import YTsearch from 'youtube-api-search';

export const testApi: ApiRequest<null, any> = () => {
  return axios.get(
    'http://api.dev-testvalley.ap-northeast-2.elasticbeanstalk.com/publications',
  );
};
