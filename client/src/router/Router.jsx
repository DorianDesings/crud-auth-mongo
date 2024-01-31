import { Route, Routes } from 'react-router-dom';

import Layout from '../layouts/Layout';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import ProfilePage from '../pages/UserProfile';
import ProtectedRoute from './ProtectedRoutes';
const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
			</Route>
			<Route path='/login' element={<LoginPage />} />
			<Route path='/register' element={<RegisterPage />} />
			<Route element={<ProtectedRoute />}>
				<Route path='/profile' element={<ProfilePage />} />
			</Route>
		</Routes>
	);
};

export default Router;
