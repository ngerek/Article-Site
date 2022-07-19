import { useContext } from 'react';
import { useCollection } from '../../hooks/useCollection';
import ArticleCard from '../../components/ArticleCard';
import { AuthContext } from '../../context/AuthContext';

// styles
import './Home.css';

const Home = () => {
	const { documents, isLoading, error } = useCollection('articles');
	const { mode } = useContext(AuthContext);
	return (
		<div className="home">
			{isLoading && <p className={`loading ${mode}`}>Loading...</p>}
			{error && <p className={`error ${mode}`}>{error}</p>}
			{documents && <ArticleCard articles={documents} />}
		</div>
	);
};

export default Home;
