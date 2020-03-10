import React from 'react';
import styled from '@emotion/styled';
import { Flex, Box } from 'rebass';
import { FormProvider } from './form-context';
import MultiStepForm from 'src/components/MultiStepForm';

function App() {
  return (
    <Flex
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems={['flex-start', 'center']}
      backgroundColor="#f8f9fa"
    >
      <FloatingBox height={['100%', '520px']} maxWidth={['100%', '720px']}>
        <Box p={[4]} height="100%">
          <FormProvider>
            <MultiStepForm />
          </FormProvider>
        </Box>
      </FloatingBox>
    </Flex>
  );
}
const FloatingBox = styled(Box)`
  width: 100%;
  background-color: ${p => p.theme.colors.white};
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 4px 10px, rgba(0, 0, 0, 0.12) 0px 1px 2px;
  margin: 0 auto;
  border-radius: ${p => p.theme.radii.default}px;
`;

export default App;
