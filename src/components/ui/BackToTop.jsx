import React from 'react';

import { buttonOverTextStyles } from '../../mdxVars';

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'

    });
};

const BackToTop = () => {

    return (
        <div className='back-to-top' style={buttonOverTextStyles}>
            <button
                className='button button--icon-over-text'
                onClick={scrollToTop}
                aria-label="Back to Top"
            >
                <span className='button__icon border-radius-circle'>
                    <span className='icon icon-arrow-up' aria-hidden='true'></span>
                </span>
                <span className='button__text'>Back to Top</span>
            </button>
        </div>
    );
};

export default BackToTop;