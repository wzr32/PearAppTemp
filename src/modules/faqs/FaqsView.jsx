import { Box } from '@mui/material';
import React from 'react';
import Newsletter from '../../shared/components/newsletter/Newsletter';
import BannerFAQS from './components/BannerFAQS';
import HaveQuestions from './components/HaveQuestions';
import QuestionsGrid from './components/QuestionsGrid';
import WhatIsPear from './components/WhatIsPear';
import TransparentPlataform from './components/TransparentPlataform';

const FaqsView = () => {
  return (
    <Box component="section" sx={{ display: "flex", flexDirection: "column", gap: "180px", marginBottom: "180px" }}>
      <BannerFAQS />
      <QuestionsGrid />
      <HaveQuestions />
      <WhatIsPear />
      <TransparentPlataform />
      <Newsletter />
    </Box>
  );
};

export default FaqsView;
