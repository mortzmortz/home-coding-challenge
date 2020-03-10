import React from 'react';
import { useNavigate } from '@reach/router';
import { useFormState, useFormDispatch } from 'src/form-context';

const useStep = ({ step, name, nextUrl = '/' }) => {
  const { currentStep, values } = useFormState();
  const dispatch = useFormDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (currentStep === step) return;
    dispatch({ type: 'SET_CURRENT_STEP', payload: step });
  }, [currentStep, dispatch, step]);

  React.useEffect(() => {
    // Navigate to first step if we refresh the page with no data at any url
    if (Object.keys(values).length === 0) navigate('/');
  }, [values, navigate]);

  const handleSubmit = React.useCallback(
    event => {
      event.preventDefault();
      const { value } = event.target.elements[name];

      // Prevent going to next step if we have not entered a value
      // TODO: add proper validation
      if (!value) return;
      dispatch({ type: 'SET_VALUES', payload: { [name]: value } });
      navigate(nextUrl);
    },
    [dispatch, name, navigate, nextUrl],
  );

  return handleSubmit;
};

export default useStep;
