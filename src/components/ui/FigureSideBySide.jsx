import React from 'react';

import classNames from 'classnames';

import FigureSingle from './FigureSingle.jsx';

const FigureSideBySide = ({
    children,
    margin = 'margin-y-5',
    width = 'wide'
}) => {
    const groupWidth = width === 'medium' ? 'medium' : 'wide';

    const figures = React.Children.map(children, (child) => {
        if (!React.isValidElement(child) || child.type !== FigureSingle) {
            return child;
        }

        return React.cloneElement(child, {
            isContained: false,
            margin: child.props.margin || 'margin-y-0'
        });
    });

    return (
        <div className="container wide">
            <div className={classNames(groupWidth, margin)}>
                <div className="grid grid--column-2 gap-3">
                    {figures}
                </div>
            </div>
        </div>
    );
};

export default FigureSideBySide;