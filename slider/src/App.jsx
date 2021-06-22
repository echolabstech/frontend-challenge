import React from 'react';
import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import clsx from 'clsx';

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
  page: {
    background: 'red',
    width: '100%',
    height: '100%',
  },
  page1: {
    background: 'red',
  },
  page2: {
    background: 'blue',
  },
  page3: {
    background: 'green',
  },
}));

function App(props) {
  const rest = {
    ...props
  }
  const classes = useStyles();
  const [value, setValue] = React.useState(30);
  const [page, setPage] = React.useState(1);

  function handleChangeCommited(event, newValue) {
    if (value !== newValue) {
      if (newValue < 50) {
        console.log('page slide right');
        if (page >= 1) {
          setPage(page - 1);
        } else {
          setPage(3);
        }
      } else {
        console.log('page slide left');
        if (page <= 3) {
          setPage(page + 1);
        } else {
          setPage(1);
        }
      }
      console.log('set value to ', 100 - newValue);
      setValue(newValue);
    }
  }

  return (
    <div className={classes.app}>
      <div className={classes.screen}>
        <div
          className={clsx(
            classes.page,
            page === 1 ? classes.page1 : null,
            page === 2 ? classes.page2 : null,
            page === 3 ? classes.page3 : null,
          )}
        ></div>
        <Slider
          defaultValue={30}
          onChangeCommitted={handleChangeCommited}
          aria-labelledby="continuous-slider"
        />
        <div
          className={clsx(
            classes.page,
            page === 1 ? classes.page1 : null,
            page === 2 ? classes.page2 : null,
            page === 3 ? classes.page3 : null,
          )}
        ></div>
      </div>
    </div>
  );
}

export default App;
