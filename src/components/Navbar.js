import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { AuthContext } from '../context/AuthContext';
import { useCapitalize } from '../hooks/useCapitalize';

// styles
import './Navbar.css';

const Navbar = () => {
	const { logout } = useLogout();
	const { user } = useContext(AuthContext);

	const { captilizeName } = useCapitalize();

	const styles = {
		fontFamily: 'Overlock',
		fontWeight: 'Black',
		letterSpacing: '0.11em',
		color: '#fff'
	};

	return (
		<nav className="navbar">
			<ul>
				<Fragment>
					<li className="title">
						<Link to="/">ArticleSite</Link>
					</li>
					{user && <p style={styles}>Hi, {captilizeName(user.displayName)}</p>}
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
