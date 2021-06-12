import React from 'react';

class Selector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: props.selected};
    }

    render() {

        return (
            <select  value={this.state.value} name="select">
                <option hidden> {this.props.name} </option>
                {
                    this.props.options.map(item => {
                        return (<option value={item.code} key={item.name}> {item.name} </option>)
                    })
                }
            </select>
        )
    }
}

export default Selector;
