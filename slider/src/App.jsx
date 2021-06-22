import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Slider from '@material-ui/core/Slider';
import clsx from 'clsx';
import Gradients from 'pages/Gradients';
import Presets from 'pages/Presets';
import Colors from 'pages/Colors';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from './theme';

const useStyles = makeStyles((theme) => ({
  'MuiSlider-root': {
    position: 'absolute',
  },
  app: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
  },
}));

function App(props) {
  const {
    ...rest
  } = props;
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        {pageNumber === 1 ? <Gradients pageNumber={pageNumber} /> : null}
        {pageNumber === 2 ? <Presets pageNumber={pageNumber} /> : null}
        {pageNumber === 3 ? <Colors pageNumber={pageNumber} /> : null}
      </div>
    </ThemeProvider>
  );
}

export default App;
