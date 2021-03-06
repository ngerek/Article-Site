import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import ArticleForm from './ArticleForm';
import ArticleList from './ArticleList';
import { useCollection } from '../../hooks/useCollection';

// styles
import './Dashboard.css';

const Dashboard = () => {
	const { user, mode } = useContext(AuthContext);
	const { documents, error, isLoading } = useCollection('articles', [ 'uid', '==', user.uid ]);

	return (
		<div className="container">
			<div className="content">
				{error && <p className={`error ${mode}`}>{error}</p>}
				{isLoading && <p className={`loading ${mode}`}>Loading...</p>}
				{documents && <ArticleList articles={documents} />}
			</div>
			<div className="sidebar">
				<ArticleForm uid={user.uid} />
			</div>
		</div>
	);
};

export default Dashboard;
