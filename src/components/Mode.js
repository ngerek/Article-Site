import ModeIcon from '../assets/mode-icon.svg';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

// styels
import './Mode.css';

const Mode = () => {
	const { mode, changeMode } = useContext(AuthContext);

	const toggleMode = () => {
		changeMode(mode === 'light' ? 'dark' : 'light');
	};
	return (
		<div className="mode">
			<img
				src={ModeIcon}
				alt="light/dark"
				onClick={toggleMode}
				style={{ filter: mode === 'light' ? 'invert(20%)' : 'invert(100%)' }}
			/>
		</div>
	);
};

export default Mode;
