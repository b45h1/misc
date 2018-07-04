import React from 'react';
// import SearchBar from './searchBar';

const Sections = (props) => {
    return(
        <div>
            OHHHHHH : {props.term}
            {!props.term === "" && "hola"}
        </div>
    );
}

export default Sections;