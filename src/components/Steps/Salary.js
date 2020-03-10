import React from 'react';
import { Flex, Box, Button, Text } from 'rebass';
import { Radio, Label } from '@rebass/forms';
import { useFormState } from 'src/form-context';
import useStep from './use-step';

const SALARY_OPTIONS = {
  OPTION1: {
    label: 'Less than 1000',
    value: { min: 0, max: 1000 },
  },
  OPTION2: {
    label: '1000 - 2000',
    value: { min: 1000, max: 2000 },
  },
  OPTION3: {
    label: '2000 - 3000',
    value: { min: 2000, max: 3000 },
  },
  OPTION4: {
    label: '3000 - 4000',
    value: { min: 3000, max: 4000 },
  },
  OPTION5: {
    label: 'More than 4000',
    value: { min: 4000, max: 0 },
  },
};

const Salary = () => {
  const { values } = useFormState();
  const handleSubmit = useStep({
    step: 4,
    name: 'salary',
    nextUrl: '/complete',
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
        <Box mb={[3]}>
          <Text>Your salary in $</Text>
        </Box>
        {Object.entries(SALARY_OPTIONS).map(([key, option], index) => (
          <Box key={key} mb={[2]}>
            <Label>
              <Radio
                name="salary"
                value={key}
                defaultChecked={values.salary === key || index === 0}
                autoFocus={values.salary === key || index === 0}
              />
              {option.label}
            </Label>
          </Box>
        ))}
      </Box>
      <Button type="submit">Next</Button>
    </Flex>
  );
};

export { SALARY_OPTIONS };
export default Salary;
