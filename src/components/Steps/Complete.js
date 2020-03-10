import React from 'react';
import { Flex, Box, Button, Text } from 'rebass';
import { useFormState } from 'src/form-context';
import useStep from './use-step';
import { SALARY_OPTIONS } from './Salary';

const Complete = () => {
  const { values } = useFormState();
  useStep({ step: 5 });

  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      width="100%"
      minHeight="100%"
    >
      <h2 style={{ textAlign: 'center' }}>Details</h2>
      <Box mb={[4]}>
        <Flex justifyContent="space-between" px={[1]} py={[2]}>
          <Text color="grey.7">Name</Text>
          <Text>{values.fullName}</Text>
        </Flex>
        <Flex justifyContent="space-between" px={[1]} py={[2]}>
          <Text color="grey.7">Email</Text>
          <Text>{values.email}</Text>
        </Flex>
        <Flex justifyContent="space-between" px={[1]} py={[2]}>
          <Text color="grey.7">Phone</Text>
          <Text>{values.phone}</Text>
        </Flex>
        <Flex justifyContent="space-between" px={[1]} py={[2]}>
          <Text color="grey.7">Salary</Text>
          <Text>{SALARY_OPTIONS[values.salary]?.label}</Text>
        </Flex>
      </Box>
      <Button
        variant="secondary"
        onClick={() => console.log('Do something with', values)}
      >
        Complete
      </Button>
    </Flex>
  );
};

export default Complete;
