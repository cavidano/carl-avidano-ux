import React from 'react';

const ThemeWrapper = ({
	children,
	backgroundColor = null,
	textColor = null
}) => {
	const themeStyles = {
		...(backgroundColor && { '--secondary': backgroundColor }),
		...(textColor && { '--secondary-text': textColor })
	};

	return (
		<div className='theme-secondary margin-y-6 padding-y-5' style={themeStyles}>
			<div className='container wide'>
				{children}
			</div>
		</div>
	);
};

export default ThemeWrapper;
