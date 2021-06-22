import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
  },
  screen: {
    width: '100%',
    height: '100%',
    border: '1px solid black',
  },
}));

function App(props) {
  const rest = {
    ...props
  }
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <div className={classes.screen}></div>
    </div>
  );
}

export default App;
