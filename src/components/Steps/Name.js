import React from 'react';
import { Flex, Box, Button } from 'rebass';
import { Input, Label } from '@rebass/forms';
import { useFormState } from 'src/form-context';
import useStep from './use-step';

const Name = () => {
  const { values } = useFormState();
  const handleSubmit = useStep({
    step: 1,
    name: 'fullName',
    nextUrl: '/email',
  });

  return (
    <Flex
      as="form"
      flexDirection="column"
      justifyContent="space-between"
      width="100%"
      minHeight="100%"
      onSubmit={handleSubmit}
    >
      <Box mb={[4]}>
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          name="fullName"
          id="fullName"
          defaultValue={values.fullName}
          autoFocus
        />
      </Box>
      <Button type="submit">Next</Button>
    </Flex>
  );
};

export default Name;
