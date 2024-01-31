import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
const Menu = () => {
	const { userData, loading } = useContext(AuthContext);
	return (
		<nav>
			<ul>
				<li>
					<Link to='/'>HOME</Link>
				</li>
				{!userData && !loading && (
					<>
						<li>
							<Link to='/login'>LOGIN</Link>
						</li>
						<li>
							<Link to='/register'>REGISTER</Link>
						</li>
					</>
				)}
				<li>
					<Link to='/profile'>PROFILE</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
