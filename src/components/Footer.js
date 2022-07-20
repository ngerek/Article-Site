import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';

// styles
import './Footer.css';

const Footer = () => {
	const { mode } = useContext(AuthContext);
	return (
		<footer className={`footer ${mode}`}>
			<ul>
				<li>
					<h1>ArticleSite</h1>
				</li>
				<div className="social-media">
					<li>
						<Link to="#">
							<FaFacebookSquare />
						</Link>
					</li>
					<li>
						<Link to="#">
							<FaTwitterSquare />
						</Link>
					</li>
					<li>
						<Link to="#">
							<FaInstagramSquare />
						</Link>
					</li>
					<li>
						<Link to="#">
							<FaYoutube />
						</Link>
					</li>
				</div>
				<li>
					<p>&copy; 2022</p>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
