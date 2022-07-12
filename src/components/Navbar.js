import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { AuthContext } from '../context/AuthContext';

// styles
import './Navbar.css';

const Navbar = () => {
	const { logout } = useLogout();
	const { user } = useContext(AuthContext);

	const styles = {
		fontFamily: 'Roboto Slab',
		fontWeight: 'Black',
		letterSpacing: '0.11em',
		color: '#fff',
		marginRight: '15px'
	};

	const captilizeDisplayName = (str) => {
		let results = [];

		for (let word of str.split(' ')) {
			results.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
		}

		return results.join(' ');
	};

	return (
		<nav className="navbar">
			<ul>
				<Fragment>
					<li className="title">
						<Link to="/">ArticleSite</Link>
					</li>
					{user && <p style={styles}>Hi, {captilizeDisplayName(user.displayName)}</p>}
				</Fragment>

				<li>
					<Link to="/">Home</Link>
				</li>
				{user && (
					<li>
						<Link to="/dashboard">Dashboard</Link>
					</li>
				)}

				{!user && (
					<Fragment>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/signup">Signup</Link>
						</li>
					</Fragment>
				)}

				{user && (
					<li>
						<button className="logout" onClick={logout}>
							Logout
						</button>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
