import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

export interface HelloProps {
    compiler: string;
    framework: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      padding: '32px',
      backgroundColor: theme.palette.primary.main,
      fontSize: '24px',
      borderRadius: '4px',
      color: 'black',
      fontWeight: 'bold',
      '&:hover': {
        color: 'white'
      }
    },
  })
)

export const Hello:React.FunctionComponent<HelloProps> = (props) => {
  const classes = useStyles();

  const buttonClicked = () => {
    window.alert('clicked');
  }

  return <><h1>Hello from {props.compiler} and {props.framework}!</h1><Button className={classes.button} onClick={buttonClicked}>Mah</Button></>;
}
