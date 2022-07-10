import React from 'react';
import { Link } from 'react-router-dom';

// styles
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul>
				<li className="title">
					<Link to="/">ArticleSite</Link>
				</li>
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
					<Link to="/logout" className="logout">
						Logout
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
