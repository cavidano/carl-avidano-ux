import React from 'react';

import Button from '../components/natura11y/button/index.jsx';
import CaseStudyOverview from '../components/ui/CaseStudyOverview.jsx';
import Divider from '../components/ui/Divider.jsx';
import FigureSingle from '../components/ui/FigureSingle.jsx';
import IntroBlock from '../components/ui/IntroBlock.jsx';
import LinkOpenNew from '../components/ui/LinkOpenNew.jsx';
import ProjectLinkButton from '../components/ui/ProjectLinkButton.jsx';
import TextBlock from '../components/ui/TextBlock.jsx';
import ThemeWrapper from '../components/ui/ThemeWrapper.jsx';

export function getProjectMdxComponents(caseStudy) {
  return {
    Button,
    Divider,
    FigureSingle,
    IntroBlock,
    LinkOpenNew,
    ProjectLinkButton,
    TextBlock,
    ThemeWrapper,
    CaseStudyOverview: (props) => React.createElement(CaseStudyOverview, { ...props, caseStudy })
  };
}
