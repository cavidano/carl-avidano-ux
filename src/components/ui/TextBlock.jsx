import React from 'react';

import classNames from 'classnames';

const TextBlock = ({ children, className }) => {
	return (
	<div className="container wide margin-y-5">
		<div className={classNames('narrow', className)}>
			{children}
		</div>
	</div>
	);
};

export default TextBlock;