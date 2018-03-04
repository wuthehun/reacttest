import React from "react";

export default class Listfilter extends React.Component{
    constructor(props) {
        super(props);

        //this.state = {filter: ''};
    }

    render() {
        return(
            <div>
                <input type="text" onBlur={this.props.onBlur} />
                {this.props.filter}
            </div>
        )
    }
}