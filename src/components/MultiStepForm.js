import React from 'react';
import styled from '@emotion/styled';
import { Router } from '@reach/router';
import { Box, Flex } from 'rebass';
import { useFormState } from 'src/form-context';
import ProgressIndicator from 'src/components/ProgressIndicator';
import Name from 'src/components/Steps/Name';
import Email from 'src/components/Steps/Email';
import Phone from 'src/components/Steps/Phone';
import Salary from 'src/components/Steps/Salary';
import Complete from 'src/components/Steps/Complete';

const MultiStepForm = () => {
  const { steps, currentStep } = useFormState();

  return (
    <Flex flexDirection="column" height="100%">
      <Flex justifyContent="center" mb={[5]}>
        <h1>Registration</h1>
      </Flex>
      <RouterBox flex={[0, 1]} width={['100%', '400px']} mx="auto" mb={[3]}>
        <Router>
          <Name path="/" default />
          <Email path="/email" />
          <Phone path="/phone" />
          <Salary path="/salary" />
          <Complete path="/complete" />
        </Router>
      </RouterBox>
      <Flex justifyContent="center" flex={[1, 0]} alignItems={['flex-end']}>
        <ProgressIndicator currentStep={currentStep} steps={steps} />
      </Flex>
    </Flex>
  );
};

const RouterBox = styled(Box)`
  > div {
    height: 100%;
  }
`;

export default MultiStepForm;
