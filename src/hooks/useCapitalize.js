export const useCapitalize = () => {
	const captilizeName = (str) => {
		let results = [];

		for (let word of str.split(' ')) {
			results.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
		}

		return results.join(' ');
	};

	return { captilizeName };
};
