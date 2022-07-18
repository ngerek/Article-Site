import { useFirestore } from '../../hooks/useFirestore';
import Trashcan from '../../assets/trashcan.svg';
import { useCapitalize } from '../../hooks/useCapitalize';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

// styles
import './Dashboard.css';

const ArticleList = ({ articles }) => {
	const { deleteDocument } = useFirestore('articles');
	const { captilizeName } = useCapitalize();

	const { mode } = useContext(AuthContext);

	if (!articles.length) {
		return <p className={`error ${mode}`}>You have not posted any articles.</p>;
	}

	return (
		<ul className={`articles ${mode}`}>
			{articles.map((article) => (
				<li key={article.id}>
					<p className="title">{captilizeName(article.title)}</p>
					<img className="delete" src={Trashcan} alt="trashcan" onClick={() => deleteDocument(article.id)} />
				</li>
			))}
		</ul>
	);
};

export default ArticleList;
