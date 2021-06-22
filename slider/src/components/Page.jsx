import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  page: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  top: {
    width: '100%',
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    background: 'blue',
    width: '100%',
    height: '50%',
  },
  avatar: {
    height: theme.spacing(6),
    width: theme.spacing(6),
    marginBottom: theme.spacing(1),
  },
  heading: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  subHeading: {
    marginTop: theme.spacing(1),
  },
}));

export default function Page(props) {
  const {
    color1,
    color2,
    pageNumber,
    heading,
    subHeading,
    handleChangeCommited,
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
    <Slide direction={direction} in={pageNumber === 1}>
      <div className={classes.page}>
        <div className={classes.top}>
          <Avatar
            alt="one"
            className={classes.avatar}
            style={{
              background: `#7943F5`,
              background: `-webkit-linear-gradient(left, ${color1}, ${color2})`,
              background: `-moz-linear-gradient(left, ${color1}, ${color2})`,
              background: `linear-gradient(to right, ${color1}, ${color2})`,
            }}
          >
            <Typography variant="h4" component="h4">
              {pageNumber}
            </Typography>
          </Avatar>
          <div>
            <Typography className={classes.heading} variant="h1" component="h1">
              {heading}
            </Typography>
          </div>
          <div>
            <Typography className={classes.subHeading} variant="body1" component="p">
              {subHeading}
            </Typography>
          </div>
        </div>
        <div
          className={classes.bottom}
          style={{
            background: `#7943F5`,
            background: `-webkit-linear-gradient(left, ${color1}, ${color2})`,
            background: `-moz-linear-gradient(left, ${color1}, ${color2})`,
            background: `linear-gradient(to right, ${color1}, ${color2})`,
          }}
        ></div>
      </div>
      <Slider
        defaultValue={30}
        onChangeCommitted={handleChangeCommited}
        aria-labelledby="continuous-slider"
        classes={{
          'root': classes['MuiSlider-root'],
        }}
      />
    </Slide>
  );
}
