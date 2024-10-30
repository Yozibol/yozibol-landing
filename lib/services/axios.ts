import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { STORAGE_KEYS } from '@constants';
import { config } from '@config';

function axiosService(baseURL: string) {
	const instance = axios.create({
		baseURL,
		headers: {
			'Content-Type': 'application/json',
		},
	});

	instance.interceptors.request.use(
		async (config: InternalAxiosRequestConfig) => {
			let token = '';
			if (typeof window !== 'undefined') {
				token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN) || '';
			}

			if (token) {
				config.headers = {
					Authorization: `Bearer ${token}`,
				} as InternalAxiosRequestConfig['headers'];
			}

			return config;
		}
	);
	instance.interceptors.response.use(
		(response: AxiosResponse) => response,
		async (error) => {
			if (error?.response?.status === 401) {
				console.error('Unauthorized user', error?.response);
			} else if (
				error?.response?.status > 500 &&
				error?.response?.status < 600
			) {
				console.error('Server error:', error?.response);
				return;
			}

			console.error('Error:', error);
			return Promise.reject(error?.response);
		}
	);
	return instance;
}

export const httpService = axiosService(config.BASE_URL);
