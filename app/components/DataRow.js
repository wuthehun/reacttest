import React from "react";

export default class DataRow extends React.Component{
    constructor(props) {
        super(props);

        //this.state = {value: props.value};
    }

    render() {
        return(
            <tr>
                <td>{this.props.value}</td>
            </tr>
        )
    }
}