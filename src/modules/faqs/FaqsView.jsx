import { Box } from '@mui/material';
import React from 'react';
import Newsletter from '../../shared/components/newsletter/Newsletter';
import BannerFAQS from './components/BannerFAQS';
import HaveQuestions from './components/HaveQuestions';
import QuestionsGrid from './components/QuestionsGrid';
import WhatIsPear from './components/WhatIsPear';

const FaqsView = () => {
  return (
    <Box component="section" sx={{ display: "flex", flexDirection: "column", gap: "180px", marginBottom: "180px" }}>
      <BannerFAQS />
      <QuestionsGrid />
      <HaveQuestions />
      <WhatIsPear />
      <WhatIsPear />
      <Newsletter />
    </Box>
  );
};

export default FaqsView;
