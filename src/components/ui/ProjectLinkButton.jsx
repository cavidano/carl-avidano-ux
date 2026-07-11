import React from 'react';

import Button from '../natura11y/button/index.jsx';

const ProjectLinkButton = ({
  title = 'View project',
  linkUrl = '#1',
  iconEndHandle = 'open-new',
  target = '_blank',
  rel = 'noreferrer',
  utilities = 'button--outline text-color-link font-size-sm',
}) => {
  return (
    <div className='container wide margin-y-4'>
      <Button
        tag='a'
        title={title}
        linkUrl={linkUrl}
        iconEndHandle={iconEndHandle}
        target={target}
        rel={rel}
        utilities={utilities}
      />
    </div>
  );
};

export default ProjectLinkButton;