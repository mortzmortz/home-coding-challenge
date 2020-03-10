const theme = {
  breakpoints: ['768px'],
  font: 'system-ui, sans-serif',
  colors: {
    background: '#fff',
    primary: '#3333ee',
    secondary: '#aa00cc',
    white: '#ffffff',
    black: '#000000',
    grey: [
      '#f8f9fa',
      '#f1f3f5',
      '#e9ecef',
      '#dee2e6',
      '#ced4da',
      '#adb5bd',
      '#868e96',
      '#495057',
      '#343a40',
      '#212529',
    ],
    error: '#fa5252',
    text: '#000',
  },
  fontSizes: ['0.875rem', '1rem', '1.25rem'],
  space: [0, 4, 8, 16, 32, 64, 128],
  radii: {
    default: 4,
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: 'normal',
      color: 'background',
      bg: 'primary',
      borderRadius: 'default',
      disabled: {
        bg: 'secondary',
      },
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary',
    },
  },
};

export default theme;
