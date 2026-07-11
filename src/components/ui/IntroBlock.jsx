import React from 'react';

const IntroBlock = ({ children }) => {
	return (
		<div className='container narrow'>
			<h2>
				{children}
			</h2>
		</div>
	);
};

export default IntroBlock;