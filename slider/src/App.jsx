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
  const [value, setValue] = React.useState(30);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [direction, setDirection] = React.useState('left');

  function handleChangeCommited(event, newValue) {
    if (value !== newValue) {
      if (newValue < 50) {
        setDirection('right');
        if (pageNumber > 1) {
          setPageNumber(pageNumber - 1);
        } else {
          setPageNumber(3);
        }
      } else {
        setDirection('left');
        if (pageNumber < 3) {
          setPageNumber(pageNumber + 1);
        } else {
          setPageNumber(1);
        }
      }
      console.log('set value to ', 100 - newValue);
      setValue(newValue);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        {pageNumber === 1 ? <Gradients pageNumber={pageNumber} active={pageNumber === 1} direction={direction} /> : null}
        {pageNumber === 2 ? <Presets pageNumber={pageNumber} active={pageNumber === 2} direction={direction} /> : null}
        {pageNumber === 3 ? <Colors pageNumber={pageNumber} active={pageNumber === 3} direction={direction} /> : null}
        <Slider
          defaultValue={30}
          onChangeCommitted={handleChangeCommited}
          aria-labelledby="continuous-slider"
          classes={{
            'root': classes['MuiSlider-root'],
          }}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
