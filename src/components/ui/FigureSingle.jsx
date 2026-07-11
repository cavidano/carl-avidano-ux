import React from 'react';

import classNames from 'classnames';

const FigureSingle = ({
    children,
    caption = null,
    className = null,
    isContained = true,
    margin = 'margin-y-5',
    width = 'wide'
}) => {

    const containerClasses = classNames(
        'container wide',
        margin
    );

    const figureClasses = classNames(
        isContained && width,
        !isContained && margin,
        className
    );

    const figure = (
        <figure className={figureClasses}>
            {children}
            {caption != null && (
                <figcaption className='font-size-md'>
                    <p>
                        <em>{caption}</em>
                    </p>
                </figcaption>
            )}
        </figure>
    );

    if (!isContained) {
        return figure;
    }

    return (
        <div className={containerClasses}>
            {figure}
        </div>
    );
};

export default FigureSingle;
