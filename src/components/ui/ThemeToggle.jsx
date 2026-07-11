import React, { useContext } from 'react';

import ThemeContext from '../../context/themeContext.jsx';

import { buttonOverTextStyles } from '../../mdxVars';

const ThemeToggle = () => {

	const { handleTheme } = useContext(ThemeContext);

	return (
		<div className='theme-picker' style={buttonOverTextStyles}>
			<button
				className='button button--icon-over-text'
				onClick={handleTheme}
			>
			<span className='button__icon border-radius-circle'>
				<span
					className='icon icon-mode-light-dark'
					aria-hidden='true'
				></span>
			</span>
				<span className='button__text'>Theme</span>
			</button>
		</div>
	);
};

export default ThemeToggle;