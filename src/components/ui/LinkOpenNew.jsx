import React from 'react';

import classNames from 'classnames';

const LinkOpenNew = (props) => {
    
    const {
        LinkText ='Link',
        LinkUrl ='#1',
        utilities = null
    } = props;

    const LinkClasses = classNames(
		`open-new`,
		{ 
			[`${utilities}`] : utilities !== null
		}
	);

	return (
		<a
			className={LinkClasses}
			href={LinkUrl}
			target='_blank'
			rel='noreferrer'
		>
			{LinkText}
		</a>
	);
};

export default LinkOpenNew;