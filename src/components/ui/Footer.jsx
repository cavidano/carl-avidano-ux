import React from 'react';

import ThemeToggle from './ThemeToggle.jsx';
import BackToTop from './BackToTop.jsx';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='container wide margin-top-5'>
            
            <div className='display-flex justify-content-between align-items-center padding-y-3 border-top font-size-sm'>

                <div className='flex-column flex-row--md gap-1'>
                    <span>
                        &#169; {currentYear} - Carl Avidano.
                    </span>
                    <span>
                        All Rights Reserved.
                    </span> 
                </div>

                <div className='display-flex gap-3'>  
                    <ThemeToggle />              
                    <BackToTop />
                </div>
            
            </div>
        
        </footer>
    );
};

export default Footer;