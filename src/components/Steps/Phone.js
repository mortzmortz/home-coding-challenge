import React from 'react';
import { Flex, Box, Button } from 'rebass';
import { Input, Label } from '@rebass/forms';
import { useFormState } from 'src/form-context';
import useStep from './use-step';

const Phone = () => {
  const { values } = useFormState();
  const handleSubmit = useStep({
    step: 3,
    name: 'phone',
    nextUrl: '/salary',
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
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          name="phone"
          id="phone"
          type="tel"
          defaultValue={values.phone}
          autoFocus
        />
      </Box>
      <Button type="submit">Next</Button>
    </Flex>
  );
};

export default Phone;
