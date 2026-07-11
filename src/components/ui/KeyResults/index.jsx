import React from 'react';
import './style.scss';

const KeyResults = ({ children }) => {
	return (
		<div className='medium margin-y-5'>
			<div className='key-results-grid'>
				{children}
			</div>
		</div>
	);
};

export default KeyResults;
