import { useFirestore } from '../../hooks/useFirestore';
import Trashcan from '../../assets/trashcan.svg';
import { useCapitalize } from '../../hooks/useCapitalize';

// styles
import './Dashboard.css';

const ArticleList = ({ articles }) => {
	const { deleteDocument } = useFirestore('articles');
	const { captilizeName } = useCapitalize();

	return (
		<ul className="articles">
			{articles &&
				articles.map((article) => (
					<li key={article.id}>
						<p className="title">{captilizeName(article.title)}</p>
						{/* <p className="author">{article.author}</p> */}
						<img
							className="delete"
							src={Trashcan}
							alt="trashcan"
							onClick={() => deleteDocument(article.id)}
						/>
					</li>
				))}
		</ul>
	);
};

export default ArticleList;
