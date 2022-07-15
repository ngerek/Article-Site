import { Fragment, useEffect, useState } from 'react';
import { useFirestore } from '../../hooks/useFirestore';

const ArticleForm = ({ uid }) => {
	const [ title, setTitle ] = useState('');
	const [ author, setAuthor ] = useState('');
	const [ body, setBody ] = useState('');

	const { addDocument, state } = useFirestore('articles');

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
		<Fragment>
			<h3>Add an Article</h3>
			<form onSubmit={handleSubmit}>
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
		</Fragment>
	);
};

export default ArticleForm;
