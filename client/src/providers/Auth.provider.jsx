import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

import { AuthContext } from '../contexts/AuthContext';
import { verifyTokenRequest } from '../utils/api/auth.api';

export const AuthProvider = ({ children }) => {
	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		checkLogin(setUserData, setLoading);
	}, []);

	return (
		<AuthContext.Provider value={{ userData, setUserData, loading }}>
			{children}
		</AuthContext.Provider>
	);
};

const checkLogin = async (setUserData, setLoading) => {
	const cookies = Cookies.get();
	if (!cookies.token) {
		setLoading(false);
		return;
	}

	try {
		const response = await verifyTokenRequest(cookies.token);

		if (!response) {
			setLoading(false);
			return;
		}

		setUserData(response);
		setLoading(false);
	} catch (error) {
		setLoading(false);
	}
};
