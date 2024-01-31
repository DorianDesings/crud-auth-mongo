import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';
import { loginRequest } from '../utils/api/auth.api';

const Login = () => {
	const { isAuthenticated, loading, setUserData } = useContext(AuthContext);
	const navigate = useNavigate();
	const [loginData, setLoginData] = useState({
		email: '',
		password: ''
	});

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/');
		}
	}, [isAuthenticated]);

	if (loading) return <h1>Checking User...</h1>;

	return (
		<>
			<h1>Login Page</h1>
			<form
				onSubmit={event =>
					handleSubmit(event, loginData, navigate, setUserData)
				}
			>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						id='email'
						onChange={event =>
							setLoginData({ ...loginData, email: event.target.value })
						}
					/>
				</div>

				<div>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						onChange={event =>
							setLoginData({ ...loginData, password: event.target.value })
						}
					/>
				</div>
				<button>LOGIN</button>
			</form>
		</>
	);
};

const handleSubmit = async (event, loginData, navigate, setUserData) => {
	event.preventDefault();
	try {
		await loginRequest(loginData, setUserData);
		navigate('/');
	} catch (error) {
		console.error('Error de inicio de sesión:', error);
		// Puedes manejar el error aquí, por ejemplo, mostrar un mensaje de error
	}
};

export default Login;
