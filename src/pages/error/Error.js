// styles
import './Error.css';

const Error = () => {
	return (
		<div className="error">
			<h2>Sorry, this page isn't available.</h2>
			<p style={{ marginTop: '15px' }}>The link you followed may be broken, or the page may have been removed.</p>
		</div>
	);
};

export default Error;
