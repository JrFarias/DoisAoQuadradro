import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const getModalStyle = () => ({
  outline: 'none',
})

const styles = theme => ({
  paper: {
    display: 'flex',
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    flexDirection: 'column',
    alignItems: 'center',
    padding: '24px',
    width: '87%',
    height: '100%'
  },
  button: {
    width: '100%',
    marginTop: '80px',
    backgroundColor: '#3c58df',
  },
  input: {
    width: '100%',
    marginTop: '20px'
  }
});

class SimpleModal extends React.Component {
  state = {
    openModal: false,
    closeModal: false,
    description: '',
    amount: '',
    agency: '',
    account: '',
    paymentDate: '',
  };

  componentWillReceiveProps(state) {
    this.setState({ openModal: state.open })
  }

  handleChange = (event, key) => {
    this.setState({ [key]: event.target.value });
	};

  saveNewPayment = (history) => {
    const payment = {
      description: this.state.description,
      amount: this.state.amount,
      agency: this.state.agency,
      account: this.state.account,
      paymentDate: new Date(this.state.paymentDate),
    };

    axios.post('http://localhost:3001/api/payments', payment)
      .then(res => console.log(res))
    this.setState({ closeModal: true })
  }

  render() {
    const { classes, houseName, open } = this.props;
    const { error, openModal, closeModal } = this.state;

    let modalStatusOpen = open;
    if (closeModal) {
      modalStatusOpen = false;
    } 

    return (
      <div className={classes.root}>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={modalStatusOpen}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              {houseName}
            </Typography>

            <FormControl className={classes.input}>
							<InputLabel htmlFor="despesa-name">Defina da despesa</InputLabel>
							<Input id="despesa-name" value={this.state.description} error={error} onChange={(e) => this.handleChange(e, 'description')} />
						</FormControl>
            <FormControl className={classes.input}>
							<InputLabel htmlFor="despesa-value">Valor da despesa</InputLabel>
							<Input id="despesa-value" value={this.state.amount} error={error} onChange={(e) => this.handleChange(e, 'amount')} />
						</FormControl>

            <p style={{ marginTop: '40px', marginBottom: '0' }}>Informações do Favorecido</p>
            
            <FormControl className={classes.input}>
							<InputLabel htmlFor="agency">Agência</InputLabel>
							<Input id="agency" value={this.state.agency} error={error} onChange={(e) => this.handleChange(e, 'agency')} />
						</FormControl>
            <FormControl className={classes.input}>
							<InputLabel htmlFor="account">Conta e Dígito</InputLabel>
							<Input id="account" value={this.state.account} error={error} onChange={(e) => this.handleChange(e, 'account')} />
						</FormControl>

            <TextField
              id="paymentDate"
              label="paymentDate"
              type="date"
              defaultValue="21-10-2018"
              className={classes.input}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => this.handleChange(e, 'paymentDate')}
            />
            {openModal &&
              <Button variant="contained" color="primary" className={classes.button} onClick={this.saveNewPayment}>
                Adicionar
              </Button>}
            <SimpleModalWrapped />
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;