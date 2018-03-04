import React from "react";

import DataRow from "./DataRow";

export default class ListTable extends React.Component{
    constructor(props) {
        super(props);
        //this.state = {datas: props.datas};
    }

    render() {
        return(
            <table>
                {
                    this.props.datas.map((data) =>
                        <DataRow value={data}/>
                    )
                }
            </table>
        )
    }
}