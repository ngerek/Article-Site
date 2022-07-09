import React from 'react';
import { Link } from 'react-router-dom';

// styles
import './Navbar.css';

const Navbar = () => {
	return (
		<nav>
			<ul>
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
					<Link to="/logout">Logout</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
