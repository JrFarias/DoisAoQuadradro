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

import Logo from './Logo.svg';

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

class Register extends React.Component {
  state = {
    name: '',
    email: '',
    documentId: '',
    error: false,
  }

  handleChange = (event, key) => {
    this.setState({ [key]: event.target.value });
  };
  
  handleOnclick = () => {
    if (!!this.state.name && !!this.state.email && !!this.state.documentId) {
      this.setState({ error: true })
      return
    }

    axios.post('http://localhost:3001/api/profile', this.state)
    .then(res => {
      this.props.history.push('/Wallet');
    })
  } 

  render() {
    const { classes } = this.props;
    const { name, email, documentId, error } = this.state;

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
          <img src={Logo} style={{ height: '100px' }} alt="Logo" />
          <p>Compartilhe as despesas da casa com várias pessoas e pague por aqui mesmo.</p>
          <p><strong>Cadastre-se de graça</strong><br /> para convidar outras pessoas.</p>
    
          <FormControl className={classes.input}>
            <InputLabel htmlFor="register-name">Nome Completo</InputLabel>
            <Input id="register-name" value={name} error={error}  onChange={(e) => this.handleChange(e, 'name')} />
          </FormControl>
    
          <FormControl className={classes.input}>
            <InputLabel htmlFor="register-email">Email</InputLabel>
            <Input id="register-email" value={email} error={error} onChange={(e) => this.handleChange(e, 'email')} />
          </FormControl>

          <FormControl className={classes.input}>
            <InputLabel htmlFor="register-documentId">CPF</InputLabel>
            <Input id="register-documentId" value={documentId} error={error} onChange={(e) => this.handleChange(e, 'documentId')} />
          </FormControl>
    
          <Button variant="contained" color="primary" className={classes.button} onClick={this.handleOnclick}>
            Confirmar
          </Button>
        </div>
      </div>
    );
  }  
}

export default withRouter(withStyles(styles)(Register));