import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { withRouter } from "react-router";

import Modal from './Modal';
import Residents from './Residents';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 375,
	},
	button: {
		width: '100%',
		backgroundColor: '#3c58df',
	},
	input: {
		width: '100%'
	},
	title: {
		marginLeft: '78px'
	},
	header: {
		backgroundColor: '#3c58df',
	}
});

const stylesDivider = theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
});

function ListDividers(props) {
  const { classes, ammount } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Alugel" /> R$: {ammount}
        </ListItem>
      </List>
    </div>
  );
}

ListDividers.propTypes = {
	classes: PropTypes.object.isRequired,
	ammount: PropTypes.number,
};

const DividerComponent = withStyles(stylesDivider)(ListDividers);

class FullWidthTabs extends React.Component {
  state = {
		name: '',
		value: 0,
		ammount: 4000,
		sharedAmmount: 1000,
		error: false,
		open: false,
  };

  handleChange = (event, value) => {
    this.setState({ value });
	};
	
	handleInput = (event) => {
		this.setState({ name: event.target.value });
	}

  handleChangeIndex = index => {
    this.setState({ value: index });
	};
	
	handleModal = () => {
		if(!this.state.name) {
			this.setState({ error: true })
			return 
		}

		this.setState({ open: true })
	}

	goBack = () => this.props.history.push('/');

  render() {
		const { classes, theme } = this.props;
		const { error, open, ammount, name, sharedAmmount } = this.state;

    return (
      <div className={classes.root}>
				<AppBar position="static" className={classes.header}>
					<Toolbar>
						<IconButton className={classes.arrowButton} color="inherit" aria-label="Arrow-Button" onClick={this.goBack}>
							<ArrowBack />
						</IconButton>
						<Typography variant="h6" color="inherit" className={classes.title}>
							Share Pay
						</Typography>
					</Toolbar>
      	</AppBar>
			
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Despesas" />
            <Tab label="Moradores" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
						<FormControl className={classes.input}>
							<InputLabel htmlFor="component-simple">Nome da moradia</InputLabel>
							<Input id="component-simple" value={name} error={error} onChange={this.handleInput} />
						</FormControl>

						<FormControl className={classes.input}>
							<InputLabel htmlFor="despesa-amount">Total das despesas</InputLabel>
							<Input id="despesa-amount" disabled value={ammount} />
						</FormControl>

						<FormControl className={classes.input}>
							<InputLabel htmlFor="despesa-amount">Valor compartilhado</InputLabel>
							<Input id="despesa-amount" disabled value={sharedAmmount} />
						</FormControl>

						<p style={{ textAlign:'center', marginTop: '25px' }}>Despesas</p>
						<DividerComponent ammount={ammount} />

						<Button variant="contained" color="primary" className={classes.button} onClick={this.handleModal}>
            	Adicionar Despesa
          	</Button>
						<Modal houseName={name} open={open} />
					</TabContainer>
					
          <TabContainer dir={theme.direction}><Residents /></TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(FullWidthTabs));
