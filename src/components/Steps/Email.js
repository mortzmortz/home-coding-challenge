import React from 'react';
import { Flex, Box, Button } from 'rebass';
import { Input, Label } from '@rebass/forms';
import { useFormState } from 'src/form-context';
import useStep from './use-step';

const Email = () => {
  const { values } = useFormState();
  const handleSubmit = useStep({
    step: 2,
    name: 'email',
    nextUrl: '/phone',
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
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          id="email"
          type="email"
          defaultValue={values.email}
          autoFocus
        />
      </Box>
      <Button type="submit">Next</Button>
    </Flex>
  );
};

export default Email;
