import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FeedbackForm from './FeedbackForm';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 30,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Index = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <Navbar />  
      <Grid container >
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <FeedbackForm />
          </Paper>
        </Grid>
      </Grid>
  </div>
  );
  }


ReactDOM.render(<Index />, document.getElementById('app'))
