import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';
import { registerRequest } from '../utils/api/auth.api';

const Register = () => {
	const { isAuthenticated, loading } = useContext(AuthContext);
	const navigate = useNavigate();
	const [registerData, setRegiterData] = useState({
		email: '',
		password: ''
	});

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/');
		}
	}, [isAuthenticated]);

	if (isAuthenticated) {
		// Si ya está autenticado, no renderiza nada y redirige al inicio
		return null;
	}

	if (loading) return <h1>Registering User...</h1>;

	return (
		<>
			<h1>Register Page</h1>
			<div>
				<label htmlFor='username'>Username</label>
				<input
					type='text'
					id='username'
					onChange={event =>
						setRegiterData({ ...registerData, username: event.target.value })
					}
				/>
			</div>
			<form onSubmit={event => handleSubmit(event, registerData, navigate)}>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						id='email'
						onChange={event =>
							setRegiterData({ ...registerData, email: event.target.value })
						}
					/>
				</div>

				<div>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						onChange={event =>
							setRegiterData({ ...registerData, password: event.target.value })
						}
					/>
				</div>
				<button>REGISTER</button>
			</form>
		</>
	);
};

const handleSubmit = async (event, registerData, navigate) => {
	event.preventDefault();
	try {
		await registerRequest(registerData);
		// Después de un registro exitoso, redirige a login
		navigate('/login');
	} catch (error) {
		console.error('Error de inicio de sesión:', error);
		// Puedes manejar el error aquí, por ejemplo, mostrar un mensaje de error
	}
};

export default Register;
