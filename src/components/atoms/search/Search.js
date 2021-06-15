import React from "react";
import {Input} from "./SearchStyle";

class Search extends React.Component {
    filterProduct = (e) => {
        let value = "";

        if(e.target.value.length >= 3){
            value = e.target.value;
        }
        this.props.updateFilter(value);
    };

    render() {
        return(
            <Input onChange={this.filterProduct} placeholder= "Search"/>
        )
    }
}

export default Search;
