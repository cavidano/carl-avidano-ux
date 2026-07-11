import React from 'react';

const IFrame = (props) => {
    
    const { 
        src = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FRELqPD0MlE9xfVLxRMGJTR%2FPortfolio%3Fpage-id%3D420%253A525%26type%3Ddesign%26node-id%3D420-526%26viewport%3D594%252C427%252C0.5%26t%3DpfMAfjQNkZaGrd9t-1%26scaling%3Dscale-down%26starting-point-node-id%3D420%253A526%26mode%3Ddesign' 
    } = props;

	return (
		<iframe
			className='container wide aspect-ratio-16x9'
			src={src}
		/>
	);
};

export default IFrame;