import { Link } from 'react-router-dom';
const Menu = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to='/'>HOME</Link>
				</li>
				<li>
					<Link to='/login'>LOGIN</Link>
				</li>
				<li>
					<Link to='/register'>REGISTER</Link>
				</li>
				<li>
					<Link to='/profile'>PROFILE</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
