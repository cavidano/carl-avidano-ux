import React from 'react';

import Button from '../natura11y/button/index.jsx';
import KeyResults from './KeyResults/index.jsx';
import KeyResultsCard from './KeyResults/KeyResultsCard.jsx';

const ACTIVITIES_HEADING = 'Activities at a glance';

const CaseStudyOverview = ({ children, caseStudy }) => {
  const {
    activitiesAtAGlance = [],
    projectUrl = null,
    projectButtonLabel = 'View project',
    keyResults = []
  } = caseStudy || {};

  const activityItems = Array.isArray(activitiesAtAGlance) ? activitiesAtAGlance.filter(Boolean) : [];
  const keyResultItems = Array.isArray(keyResults) ? keyResults.filter(Boolean) : [];

  const hasOverview = Boolean(children);
  const hasActivities = activityItems.length > 0;
  const hasProjectLink = Boolean(projectUrl);
  const hasKeyResults = keyResultItems.length > 0;

  if (!hasOverview && !hasActivities && !hasProjectLink && !hasKeyResults) {
    return null;
  }

  return (
    <>
      {(hasOverview || hasActivities || hasProjectLink) && (
      <div className="container wide">

        <div
          className='grid-sidebar--right gap-5 margin-y-5'
          style={{ '--grid-sidebar-width': 'min(35rem, 100%)' }}
        >
          {hasOverview && (
            <div className='grid-sidebar__major narrow'>
              {children}
            </div>
          )}

          {(hasActivities || hasProjectLink) && (
            <div className='grid-sidebar__minor font-size-md'>
              <aside>
                {hasActivities && (
                  <>
                    <h2 className='h5'>{ACTIVITIES_HEADING}</h2>
                    <ul className='bulleted margin-bottom-0'>
                      {activityItems.map((activity) => (
                        <li key={activity}>{activity}</li>
                      ))}
                    </ul>
                  </>
                )}

                {hasProjectLink && (
                  <div className='margin-top-3'>
                    <Button
                      tag='a'
                      title={projectButtonLabel}
                      linkUrl={projectUrl}
                      iconEndHandle='open-new'
                      target='_blank'
                      rel='noreferrer'
                      utilities='font-size-sm'
                    />
                  </div>
                )}
              </aside>
            </div>
          )}
        </div>

        {hasKeyResults && (
          <KeyResults>
            {keyResultItems.map(({ stat, description }) => (
              <KeyResultsCard
                key={`${stat}-${description}`}
                stat={stat}
                description={description}
              />
            ))}
          </KeyResults>
        )}

        <hr className='margin-y-5' />

        </div>
      )}

    </>
  );
};

export default CaseStudyOverview;