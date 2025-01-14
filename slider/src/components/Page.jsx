import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Slide from '@material-ui/core/Slide';
import SvgIcon from '@material-ui/core/SvgIcon';

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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
  icon: {
    fontSize: theme.spacing(12),
    color: 'white',
  }
}));

export default function Page(props) {
  const {
    color1,
    color2,
    pageNumber,
    heading,
    subHeading,
    active,
    direction,
    icon,
    ...rest
  } = props;
  const classes = useStyles();
  const timeout = {
    enter: 350,
    exit: 350,
  };

  return (
    <Slide direction={direction} in={active} timeout={timeout}>
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
        >
          <SvgIcon className={classes.icon}>{icon}</SvgIcon>
        </div>
      </div>
    </Slide>
  );
}
