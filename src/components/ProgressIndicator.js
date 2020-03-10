import React from 'react';
import styled from '@emotion/styled';
import { Box } from 'rebass';

const ProgressIndicator = ({ currentStep = 1, steps = 0 }) =>
  steps > 0 ? (
    <Box>
      {Array.from({ length: steps }).map((item, index) => (
        <Step key={index} isActive={currentStep === index + 1} mx={[1]} />
      ))}
    </Box>
  ) : null;

const Step = styled(Box)`
  display: inline-flex;
  width: ${p => (p.isActive ? '40px' : '6px')};
  height: 6px;
  border-radius: ${p => p.theme.radii.default}px;
  background-color: ${p =>
    p.isActive ? p.theme.colors.grey[5] : p.theme.colors.grey[4]};
  will-change: width;
  transition-property: width color;
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
`;

export default ProgressIndicator;
