import { Fragment, useEffect, useState, useContext } from 'react';
import { useFirestore } from '../../hooks/useFirestore';
import { AuthContext } from '../../context/AuthContext';

const ArticleForm = ({ uid }) => {
	const [ title, setTitle ] = useState('');
	const [ author, setAuthor ] = useState('');
	const [ body, setBody ] = useState('');

	const { addDocument, state } = useFirestore('articles');

	const { mode } = useContext(AuthContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		addDocument({
			uid,
			title,
			author,
			body
		});
	};

	useEffect(
		() => {
			if (state.success) {
				setTitle('');
				setAuthor('');
				setBody('');
			}
		},
		[ state.success ]
	);

	return (
		<div className={`form-container ${mode}`}>
			<h3>Add an Article</h3>
			<form onSubmit={handleSubmit} className={`form ${mode}`}>
				<label>
					<span>Title:</span>
					<input type="text" onChange={(e) => setTitle(e.target.value)} value={title} required />
				</label>

				<label>
					<span>Author:</span>
					<input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} required />
				</label>

				<label>
					<textarea
						onChange={(e) => setBody(e.target.value)}
						value={body}
						placeholder="write something..."
						required
					/>
				</label>
				<button>Add Article</button>
			</form>
		</div>
	);
};

export default ArticleForm;
