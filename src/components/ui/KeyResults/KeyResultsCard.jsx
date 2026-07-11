import React from 'react';

const KeyResultsCard = ({ stat, description }) => {
	return (
		<div className='key-results-card'>
			<div className='key-results-card__stat'>
				<div className='key-results-card__stat-text'>{stat}</div>
			</div>
			<p className='key-results-card__description'>{description}</p>
		</div>
	);
};

export default KeyResultsCard;
