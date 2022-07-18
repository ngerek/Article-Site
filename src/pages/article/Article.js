import { Fragment, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useDocument } from '../../hooks/useDocument';
import { useCapitalize } from '../../hooks/useCapitalize';
import { AuthContext } from '../../context/AuthContext';

// styles
import './Article.css';

const Article = () => {
	const { id } = useParams();
	const { document, isLoading, error } = useDocument('articles', id);
	const { captilizeName } = useCapitalize();

	const { mode } = useContext(AuthContext);

	return (
		<div className={`article ${mode}`}>
			{isLoading && <p className="loading">Loading...</p>}
			{error && <p className="error">{error}</p>}
			{document && (
				<Fragment>
					<h2>{captilizeName(document.title)}</h2>
					<div>
						<span>By </span>
						<span style={{ color: mode === 'light' ? 'black' : '#fff', fontWeight: 'bold' }}>
							{captilizeName(document.author)}
						</span>{' '}
						- <span>{document.createdAt.toDate().toDateString()}</span>
					</div>
					<p>{document.body}</p>
				</Fragment>
			)}
		</div>
	);
};

export default Article;
