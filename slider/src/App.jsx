import React from 'react';
import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
  },
  screen: {
    width: '100%',
    height: '100%',
    border: '1px solid black',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function App(props) {
  const rest = {
    ...props
  }
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeCommited = (event, newValue) => {
    if (newValue < 50) {
      console.log('slide right');
    } else {
      console.log('slide left');
    }
  };

  return (
    <div className={classes.app}>
      <div className={classes.screen}>
        <Slider
          value={value}
          onChange={handleChange}
          onChangeCommitted={handleChangeCommited}
          aria-labelledby="continuous-slider"
        />
      </div>
    </div>
  );
}

export default App;
