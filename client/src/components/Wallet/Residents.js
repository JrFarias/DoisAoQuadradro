import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Divider from '@material-ui/core/Divider';

const styles = {
  grow: {
    flexGrow: 1,
    textAlign: 'center',
    color: 'white'
  },
  button: {
    width: '100%',
    backgroundColor: '#3c58df',
    marginTop: '90px'
  }
};

const dividerStyles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  listTitle: {
    textAlign: 'center'
  }
});

function InsetDividers(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List>
        <ListItem>
          <ListItemText classes={classes.listTitle} secondary="Nome da moradia" />
        </ListItem>
        <li>
          <Divider inset />
        </li>
        <ListItem>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText primary="Bruno olar" secondary="bruno@g.com" />
        </ListItem>
        <Divider inset component="li" />
        <ListItem>
          <Avatar>
          <ImageIcon />
          </Avatar>
          <ListItemText primary="Yukiko olar" secondary="yukiko@g.com" />
        </ListItem>
        <Divider inset component="li" />
        <ListItem>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText primary="Alexandre" secondary="ale@g.com" />
        </ListItem>
        <Divider inset component="li" />
        <ListItem>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText primary="Junior" secondary="junior@g.com" />
        </ListItem>
      </List>
    </div>
  );
}

InsetDividers.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ResidentList = withStyles(dividerStyles)(InsetDividers);

function residents(props) {
  const { classes, history } = props;

  return (
    <div>
        <div>
          <ResidentList />
          {/* <img src={HighFive} style={{ height: '100px' }} alt="HighFive" /> */}
          {/* <div style={{ marginTop: '30px', textAlign: 'center'}}>
            <p><strong>1° Passo</strong> <br />Adicione as contas da casa</p>
            <p><strong>2° Passo</strong> <br />Convide quem mora com você</p>
            <p><strong>3° Passo</strong> <br />Compartilhe o valor total</p>
            <p><strong>4° Passo</strong> <br />Pague sua parte</p>
          </div> */}
          <Button variant="contained" color="primary" className={classes.button}>
            Enviar Convite
          </Button>
        </div>
    </div>
  );
}

residents.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(residents);