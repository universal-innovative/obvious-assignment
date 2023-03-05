import React from 'react';
import { Stack, Typography, useMediaQuery } from '@mui/material';

import Lottie from 'react-lottie';
import animationData from '../../assets/lottie/loader.json';

const Loader = ({ title }) => {
  const matchesPhone = useMediaQuery('(max-width: 600px)');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Stack
      alignItems="center"
      align="center"
      spacing={3}
      sx={{ marginTop: '7.5%' }}
    >
      <Typography variant="h5" sx={{ width: `${matchesPhone && '60%'}` }}>
        Loading {title}. Please wait
      </Typography>
      <Lottie options={defaultOptions} height={400} width={400} />
    </Stack>
  );
};

export default Loader;
