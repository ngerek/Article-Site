import React from 'react';
import { useCollection } from '../../hooks/useCollection';
import ArticleCard from '../../components/ArticleCard';

// styles
import './Home.css';

const Home = () => {
	const { documents, isLoading, error } = useCollection('articles');
	return (
		<div className="home">
			{isLoading && <p className="loading">Loading...</p>}
			{error && <p className="error">{error}</p>}
			{documents && <ArticleCard articles={documents} />}
		</div>
	);
};

export default Home;
