import axios, { HttpStatusCode } from 'axios';

import useHttpResponse from '@/store/httpResponse';

const axiosClient = axios.create({
	baseURL: 'http://localhost:3001/',
});

axiosClient.interceptors.request.use((config) => {
	return config;
});
axiosClient.interceptors.response.use((response) => {
	if (response.status !== HttpStatusCode.Ok) {
		useHttpResponse().setError(response);
		throw new Error('Error');
	}
	return response;
});

export default axiosClient;
