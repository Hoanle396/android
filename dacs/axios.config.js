import * as axios from "axios";
import {AsyncStorage} from 'react-native';
var axiosInstance = axios.create({
  baseURL: 'http://192.168.1.8:3000/api',
});
axiosInstance.interceptors.request.use(
  async config => {
     if (!config.headers.Authorization) {
      const token = await AsyncStorage.getItem('access_token')
       if (token) {
         config.headers.Authorization = `Bearer ${token}`;
       }
     }
     return config;
   },
   error => Promise.reject(error)
 );

export default axiosInstance;