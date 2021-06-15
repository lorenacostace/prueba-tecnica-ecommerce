import React from 'react';
import {SelectStyle} from "./SelectorStyle";

class Selector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: props.selected};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.updateSelector(this.props.name, event.target.value)
    }

    render() {

        return (
            <SelectStyle  value={this.state.value}
                     onChange={this.handleChange}
                     name="select">
                <option hidden> {this.props.name} </option>
                {
                    this.props.options.map(item => {
                        return (<option value={item.code} key={item.name}> {item.name} </option>)
                    })
                }
            </SelectStyle>
        )
    }
}

export default Selector;
