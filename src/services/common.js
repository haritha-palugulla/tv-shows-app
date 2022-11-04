import axios from 'axios';
import router from '@/router'

const api = axios.create({
    baseURL: "https://api.tvmaze.com",
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})

const responseInterceptor = function(response) {
  // Log/Process the response here.
  return response;
}

const errorInterceptor = error => {
  console.log(error.response);
  router.push({
		name: 'ErrorInPage',
		params: {
			title: 'Error in loading page',
			message: 'Communication with an api resulted in a ' + error.response.status + ' error status. Please contact the administrator.',
			key: Date.now()
		}
	});
  return Promise.reject(error);
}

api.interceptors.response.use(responseInterceptor, errorInterceptor)

export default api