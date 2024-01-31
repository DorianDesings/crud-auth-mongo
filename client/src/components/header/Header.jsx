import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Menu from '../menu/Menu';

const Header = () => {
	const { userData, loading } = useContext(AuthContext);
	return (
		<header>
			<Menu />
			<h1>{!loading && `User:${userData?.username || 'No User'}`}</h1>
		</header>
	);
};

export default Header;
