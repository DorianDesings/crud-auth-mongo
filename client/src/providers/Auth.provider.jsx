import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

import { AuthContext } from '../contexts/AuthContext';
import { verifyTokenRequest } from '../utils/api/auth.api';

export const AuthProvider = ({ children }) => {
	const [userData, setUserData] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		checkLogin(setUserData, setIsAuthenticated, setLoading);
	}, []);

	return (
		<AuthContext.Provider value={{ userData, isAuthenticated, loading }}>
			{children}
		</AuthContext.Provider>
	);
};

const checkLogin = async (setUserData, setIsAuthenticated, setLoading) => {
	const cookies = Cookies.get();
	if (!cookies.token) {
		setIsAuthenticated(false);
		setLoading(false);
		return;
	}

	try {
		const response = await verifyTokenRequest(cookies.token);

		if (!response) return setIsAuthenticated(false);
		setIsAuthenticated(true);
		setUserData(response);
		setLoading(false);
	} catch (error) {
		setIsAuthenticated(false);
		setLoading(false);
	}
};
