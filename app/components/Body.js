import React from "react";

import ListFilter from "./ListFilter";
import ListTable from "./ListTable";

export default class Body extends React.Component{
    constructor() {
        super();

        var oStuff = [
        "test",
        "fast",
        "mother",
        "father"
        ];

        this.state = {
            stuff_initial: ["test","fast","mother","father"],
            all_stuff: ["test","fast","mother","father"],
            filter: ''
        };
    }

    handleBlur(event){
        var sFilter = event.target.value;
        var oList = this.state.stuff_initial;
        oList = oList.filter(function (psItem) { return psItem.search(sFilter) != -1 });


        this.setState({all_stuff: oList});
        this.setState({filter: event.target.value});

    }

    render() {
        return(
            <div>
                <h1>Hey whats up</h1>
                <ListFilter onBlur={this.handleBlur.bind(this)}/>
                <ListTable datas={this.state.all_stuff} filter={this.state.filter}/>
            </div>
        )
    }
}