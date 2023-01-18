import { Box } from '@mui/material';
import React from 'react';
import Newsletter from '../../shared/components/newsletter/Newsletter';
import BannerFAQS from './components/BannerFAQS';
import HaveQuestions from './components/HaveQuestions';
import PlatformThatSuit from './components/PlatformThatSuit';
import QuestionsGrid from './components/QuestionsGrid';
import TransparentPlatform from './components/TransparentPlatform';

const FaqsView = () => {
  return (
    <Box component="section" sx={{ display: "flex", flexDirection: "column", gap: "180px", marginBottom: "180px" }}>
      <BannerFAQS />
      <QuestionsGrid />
      <HaveQuestions />
      <PlatformThatSuit />
      <TransparentPlatform />
      <Newsletter />
    </Box>
  );
};

export default FaqsView;
