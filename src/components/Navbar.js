import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { AuthContext } from '../context/AuthContext';

// styles
import './Navbar.css';

const Navbar = () => {
	const { logout } = useLogout();
	const { user } = useContext(AuthContext);
	return (
		<nav className="navbar">
			<ul>
				<Fragment>
					<li className="title">
						<Link to="/">ArticleSite</Link>
					</li>
					{user && <p style={{ fontWeight: 'bold' }}>hi, {user.displayName}</p>}
				</Fragment>

				<li>
					<Link to="/">Home</Link>
				</li>

				<li>
					<Link to="/dashboard">Dashboard</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/signup">Signup</Link>
				</li>
				<li>
					<button className="logout" onClick={logout}>
						Logout
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
