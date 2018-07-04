import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     width: '100%',
//   },
// });


class SearchBar extends Component{

    constructor(props){
        super(props);
        
        this.state = {term:''};
        // this.props.searchTerm = this.state.term;
    }

    render() {
        return <div>
                <TextField
                    label="Search"
                    id="margin-dense"
                    className={"textField"}
                    helperText="i.e. portfolio"
                    margin="dense"
                    onChange={event => this.onInputChange(event.target.value)}
                    value={this.state.term}
                 />
                </div>
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;//withStyles(styles)(TextFieldMargins);