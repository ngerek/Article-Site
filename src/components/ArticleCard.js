import { Link } from 'react-router-dom';
import { useCapitalize } from '../hooks/useCapitalize';

// styles
import './ArticleCard.css';

const ArticleCard = ({ articles }) => {
	const { captilizeName } = useCapitalize();
	return (
		<div className="article-list">
			{articles.map((article) => (
				<div key={article.id} className="card">
					<h3>{captilizeName(article.title)}</h3>
					<div>
						<span>By </span>
						<span style={{ color: 'black', fontWeight: 'bold' }}>
							{captilizeName(article.author)}
						</span> - <span>{article.createdAt.toDate().toDateString()}</span>
					</div>
					<div>{article.body.slice(0, 101)}...</div>
					<Link to={`/articles/${article.id}`} className="btn">
						Read more
					</Link>
				</div>
			))}
		</div>
	);
};

export default ArticleCard;
