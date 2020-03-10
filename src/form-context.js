import React from 'react';

const StateContext = React.createContext();
const DispatchContext = React.createContext();

const initialState = {
  steps: 5,
  currentStep: 1,
  values: {},
};

function reducer(state = {}, action) {
  switch (action.type) {
    case 'SET_CURRENT_STEP':
      return {
        ...state,
        currentStep: action.payload,
      };
    case 'SET_VALUES':
      return {
        ...state,
        values: {
          ...state.values,
          ...action.payload,
        },
      };
    case 'RESET_VALUES':
      return {
        ...state,
        values: {},
      };
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

function FormProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

const useFormState = () => {
  const context = React.useContext(StateContext);
  if (context === undefined) {
    throw new Error('useFormState must be used within a FormProvider');
  }
  return context;
};

const useFormDispatch = () => {
  const context = React.useContext(DispatchContext);
  if (context === undefined) {
    throw new Error('useFormDispatch must be used within a FormProvider');
  }
  return context;
};

export { FormProvider, useFormState, useFormDispatch };
