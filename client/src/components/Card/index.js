import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios';
import { withRouter } from 'react-router';
import cardSvg from './debit-card.svg';

const styles = {
  header: {
		backgroundColor: '#3c58df',
  },
  title: {
	  textAlign: 'center'
	},
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    textAlign: 'center'
  },
  button: {
    width: '100%',
    backgroundColor: '#3c58df',
    marginTop: '90px'
  }
};

class Card extends React.Component {
  state = {
    userId: '',
    card_expiration_date: '',
    card_number: '',
    card_cvv: '',
    card_holder_name: '',

  }

  componentDidMount() {
    const { userId, name } = this.props.location.state;
    this.setState({ userId, card_holder_name: name })
  }

  handleChange = (event, key) => {
    this.setState({ [key]: event.target.value });
  };
  
  handleOnclick = () => {
    axios.post('http://localhost:3001/api/credit-card', this.state)
    .then(res => {
      this.props.history.push('/Wallet');
    })
  } 

  render() {
    const { classes } = this.props;
    const { card_number, card_cvv, card_expiration_date } = this.state;

    return (
      <div>
        <AppBar position="static" className={classes.header}>
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.title}>
              Cadastro
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.root}>
          <img src={cardSvg} style={{ height: '150px' }} alt="Logo" />
          <p><strong>Para organizar as despesas</strong><br /> da sua casa, precisamos dos dados do cartão de crédito.</p>
    
          <FormControl className={classes.input}>
            <InputLabel htmlFor="Card-number">Numero do Cartão</InputLabel>
            <Input id="card-number" value={card_number} onChange={(e) => this.handleChange(e, 'card_number')} />
          </FormControl>
    
          <FormControl className={classes.input}>
            <InputLabel htmlFor="card-cvv">CVV</InputLabel>
            <Input id="card-cvv" value={card_cvv} onChange={(e) => this.handleChange(e, 'card_cvv')} />
          </FormControl>

          <FormControl className={classes.input}>
            <InputLabel htmlFor="card-holder-name">MM/AA</InputLabel>
            <Input id="card-holder-name" value={card_expiration_date} onChange={(e) => this.handleChange(e, 'card_expiration_date')} />
          </FormControl>
    
          <Button variant="contained" color="primary" className={classes.button} onClick={() => this.handleOnclick()}>
            Confirmar
          </Button>
        </div>
      </div>
    );
  }  
}

export default withRouter(withStyles(styles)(Card));