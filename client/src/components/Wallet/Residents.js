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
import { WhatsappShareButton } from 'react-share';

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
  const { classes } = props;

  return (
    <div>
        <div>
          <ResidentList />
          <Button variant="contained" color="primary" className={classes.button}>
            <WhatsappShareButton url={'https://sharePay/register'} title={'share pay'} separator=":: ">
              Enviar Convite
            </WhatsappShareButton>
          </Button>
        </div>
    </div>
  );
}

residents.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(residents);