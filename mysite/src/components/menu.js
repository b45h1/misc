import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import PermIdentity from '@material-ui/icons/PermIdentity';


let styles;

class MenuButtons extends Component {

    
    constructor(props){
        super(props);
    }
    render(){
    
    styles = theme => ({  
        button: {
        margin: theme.spacing.unit,
      },
    });
    const { classes } = this.props;


  return (
    <div>
      <div>
        <Button variant="fab" mini color="secondary" aria-label="add" className={classes.button}>
          <AddIcon />
        </Button>
        <Button onClick={() => { this.showPersonalInformation("true"); }} variant="fab" mini color="secondary"  aria-label="add" className={classes.button}>
          <PermIdentity />
        </Button>
      </div>
    </div>
  );
}
  showPersonalInfo(value) {
    this.props.onClickToggle(value);
}
showPersonalInformation(value){
    this.props.onClickToggle(value);
  }
}





MenuButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuButtons);