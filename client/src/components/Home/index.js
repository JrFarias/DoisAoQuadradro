import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HighFive from './high-five.svg';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: '#3c58df',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  home: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: '20px'
  },
  grow: {
    flexGrow: 1,
    textAlign: 'center',
    color: 'white'
  },
  button: {
    margin: '47px 40px 40px 41px',
  },
  card: {
    width: '90%',
    borderRadius: '40px',
    marginTop: '35px',
    marginBottom: '40px'
  }
};

const handleButton = (history) => history.push('/wallet'); 

function Home(props) {
  const { classes, history } = props;

  return (
    <div className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.grow}>
          Share Pay
        </Typography>
      </Toolbar>
      
      <Card className={classes.card}>
      <CardContent>
        <div className={classes.home}>
          <img src={HighFive} style={{ height: '100px' }} alt="HighFive" />
          <div style={{ marginTop: '30px', textAlign: 'center'}}>
            <p>• Adicione as contas de casa</p>
            <p>• Convide quem mora com você</p>
            <p>• Compartilhe o valor total</p>
            <p>• Pague sua parte</p>
          </div>
          <Button variant="contained" color="primary" className={classes.button} onClick={() => handleButton(history)}>
            Dividir contas
          </Button>
        </div>
        </CardContent>
      </Card>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);