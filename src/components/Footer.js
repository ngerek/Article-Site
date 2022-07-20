import React from 'react';
import { Link } from 'react-router-dom';

// styles
import './Footer.css';

const Footer = () => {
	return (
		<footer>
			<ul>
				<li>
					<Link to="#">ArticleSite</Link>
				</li>
				<div>
					<li>
						<Link to="#">ArticleSite</Link>
					</li>
					<li>
						<Link to="#">ArticleSite</Link>
					</li>
					<li>
						<Link to="#">ArticleSite</Link>
					</li>
				</div>
				<li>
					<Link to="#">ArticleSite</Link>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
