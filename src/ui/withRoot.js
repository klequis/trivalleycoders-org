import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
// import { blue } from '@material-ui/core/colors'


// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  breakpoints: {
    keys: [
      'xs',
      'sm',
      'md',
      'lg',
      'xl'
    ],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  direction: 'ltr',
  mixins: {
    toolbar: {
      minHeight: 56,
      '@media (min-width:0px) and (orientation: landscape)': {
        'minHeight': 48
      },
      '@media (min-width:600px)': {
        'minHeight': 64
      }
    }
  },
  overrides: {},
  palette: {
    common: {
      black: '#000',
      white: '#fff',
      headings: {
        dark: '#000',
        light: '#fff',
        green: '#00b119'
      },
      text: {
        dark: '#000',
        light: '#fff',
        green: '#00b119'
      },
      'background': {
        light: '#fff',
        medium: '#646464',
        dark: '#272b30'
      }
    },
    type: 'dark',
    primary: {
      light: '#7986cb',
      main: '#3f51b5',
      dark: '#303f9f',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff4081',
      main: '#f50057',
      dark: '#c51162',
      contrastText: '#fff'
    },
    'error': {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff'
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: {
      paper: '#424242',
      default: '#303030'
    },
    action: {
      active: '#fff',
      hover: 'rgba(255, 255, 255, 0.1)',
      hoverOpacity: 0.1,
      selected: 'rgba(255, 255, 255, 0.2)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)'
    }
  },
  props: {},
  shadows: [
    'none',
    '0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
    '0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    '0px 1px 8px 0px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 3px 3px -2px rgba(0, 0, 0, 0.12)',
    '0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12)',
    '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
    '0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12)',
    '0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
    '0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0, 0, 0, 0.12)',
    '0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0, 0, 0, 0.12)',
    '0px 6px 7px -4px rgba(0, 0, 0, 0.2),0px 11px 15px 1px rgba(0, 0, 0, 0.14),0px 4px 20px 3px rgba(0, 0, 0, 0.12)',
    '0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)',
    '0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 13px 19px 2px rgba(0, 0, 0, 0.14),0px 5px 24px 4px rgba(0, 0, 0, 0.12)',
    '0px 7px 9px -4px rgba(0, 0, 0, 0.2),0px 14px 21px 2px rgba(0, 0, 0, 0.14),0px 5px 26px 4px rgba(0, 0, 0, 0.12)',
    '0px 8px 9px -5px rgba(0, 0, 0, 0.2),0px 15px 22px 2px rgba(0, 0, 0, 0.14),0px 6px 28px 5px rgba(0, 0, 0, 0.12)',
    '0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)',
    '0px 8px 11px -5px rgba(0, 0, 0, 0.2),0px 17px 26px 2px rgba(0, 0, 0, 0.14),0px 6px 32px 5px rgba(0, 0, 0, 0.12)',
    '0px 9px 11px -5px rgba(0, 0, 0, 0.2),0px 18px 28px 2px rgba(0, 0, 0, 0.14),0px 7px 34px 6px rgba(0, 0, 0, 0.12)',
    '0px 9px 12px -6px rgba(0, 0, 0, 0.2),0px 19px 29px 2px rgba(0, 0, 0, 0.14),0px 7px 36px 6px rgba(0, 0, 0, 0.12)',
    '0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 20px 31px 3px rgba(0, 0, 0, 0.14),0px 8px 38px 7px rgba(0, 0, 0, 0.12)',
    '0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 21px 33px 3px rgba(0, 0, 0, 0.14),0px 8px 40px 7px rgba(0, 0, 0, 0.12)',
    '0px 10px 14px -6px rgba(0, 0, 0, 0.2),0px 22px 35px 3px rgba(0, 0, 0, 0.14),0px 8px 42px 7px rgba(0, 0, 0, 0.12)',
    '0px 11px 14px -7px rgba(0, 0, 0, 0.2),0px 23px 36px 3px rgba(0, 0, 0, 0.14),0px 9px 44px 8px rgba(0, 0, 0, 0.12)',
    '0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12)'
  ],
  typography: {

    // eslint-disable-next-line
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    display4: {
      fontSize: '7rem',
      fontWeight: 300,
      // eslint-disable-next-line
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      letterSpacing: '-.04em',
      lineHeight: '1.14286em',
      marginLeft: '-.04em',
      color: 'rgba(255, 255, 255, 0.7)'
    },
    display3: {
      fontSize: '3.5rem',
      fontWeight: 400,
      // eslint-disable-next-line
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      letterSpacing: '-.02em',
      lineHeight: '1.30357em',
      marginLeft: '-.02em',
      color: 'rgba(255, 255, 255, 0.7)'
    },
    display2: {
      fontSize: '2.8125rem',
      fontWeight: 400,
      // eslint-disable-next-line
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.13333em',
      marginLeft: '-.02em',
      color: 'rgba(255, 255, 255, 0.7)'
    },
    display1: {
      fontSize: '2.125rem',
      fontWeight: 400,
      // eslint-disable-next-line
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.20588em',
      color: 'rgba(255, 255, 255, 0.7)'
    },
    headline: {
      fontSize: '1.5rem',
      fontWeight: 400,
      // eslint-disable-next-line
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.35417em',
      color: '#fff'
    },
    title: {
      fontSize: '1.3125rem',
      fontWeight: 500,
      // eslint-disable-next-line
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.16667em',
      color: '#fff'
    },
    subheading: {
      fontSize: '1rem',
      fontWeight: 400,
      // eslint-disable-next-line
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.5em',
      color: '#fff'
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      // eslint-disable-next-line
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.71429em',
      color: '#fff'
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      // eslint-disable-next-line
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.46429em',
      color: '#fff'
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      // eslint-disable-next-line
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.375em',
      color: 'rgba(255, 255, 255, 0.7)'
    },
    button: {
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      fontWeight: 500,
      // eslint-disable-next-line
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      color: '#fff'
    }
  },
  shape: {
    'borderRadius': 4
  },
  spacing: {
    'unit': 8
  },
  transitions: {
    'easing': {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    }
  },
  zIndex: {
    obileStepper: 1000,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  }
})

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    )
  }

  return WithRoot
}

export default withRoot