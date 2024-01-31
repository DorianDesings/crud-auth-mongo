import { HEADERS } from '../../constants/headers';
import { URLS } from '../../constants/urls';

export const registerRequest = async user => {
	try {
		const response = await fetch(URLS.AUTH_REGISTER, {
			method: 'POST',
			headers: HEADERS,
			body: JSON.stringify(user),
			credentials: 'include' // Esto es equivalente a withCredentials en Axios
		});

		if (!response.ok) {
			throw new Error(`Error al realizar la solicitud: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error en la solicitud de registro:', error);
		throw error;
	}
};

export const loginRequest = async user => {
	try {
		const response = await fetch(URLS.AUTH_LOGIN, {
			method: 'POST',
			headers: HEADERS,
			body: JSON.stringify(user),
			credentials: 'include'
		});

		if (!response.ok) {
			throw new Error(`Error al realizar la solicitud: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error en la solicitud de inicio de sesión:', error);
		throw error;
	}
};

export const verifyTokenRequest = async () => {
	try {
		const response = await fetch(URLS.AUTH_VERIFY_TOKEN, {
			method: 'GET',
			headers: HEADERS,
			credentials: 'include'
		});

		if (!response.ok) {
			throw new Error(`Error al realizar la solicitud: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error en la verificación del token:', error);
		throw error;
	}
};
