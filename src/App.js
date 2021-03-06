import React, { Component } from "react";
import Table from "./Table";
import AddItemForm from "./AddItemForm";
import uuidv1 from "uuid/v1";
import { calcRPP, roundRPP, compareFunc } from "./helpers";
import FilterByNameForm from "./FilterByNameForm";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            sortBy: "createdAt",
            sortOrder: "asc",
            filterInput: ""
        };

        this.onAdd = this.onAdd.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onDeleteAll = this.onDeleteAll.bind(this);
        this.onSort = this.onSort.bind(this);
        this.handleFilterInputChange = this.handleFilterInputChange.bind(this);
    }

    onAdd(itemObj) {
        const RPP = roundRPP(calcRPP(itemObj.LBIN, itemObj.desiredProfit));

        const finalItemObj = {
            name: itemObj.name,
            LBIN: parseInt(itemObj.LBIN),
            desiredProfit: parseInt(itemObj.desiredProfit),
            RPP,
            createdAt: new Date(),
            id: uuidv1()
        };

        const items = this.state.items.concat(finalItemObj);

        this.setState({ items });
    }

    onDelete(itemID) {
        const items = this.state.items.filter(item => item.id !== itemID);

        this.setState({ items });
    }

    onDeleteAll() {
        this.setState({ items: [] });
    }

    onSort(sortProp) {
        let items = this.state.items.slice();

        if (this.state.sortOrder === "asc") {
            items = items.sort((a, b) => compareFunc(a, b, sortProp, "desc"));
            this.setState({ items, sortBy: sortProp, sortOrder: "desc" });
        } else {
            items = items.sort((a, b) => compareFunc(a, b, sortProp, "asc"));
            this.setState({ items, sortBy: sortProp, sortOrder: "asc" });
        }
    }

    handleFilterInputChange(filterInput) {
        this.setState({ filterInput });
    }

    render() {
        return (
            <div className="container my-5">
                <AddItemForm onAdd={this.onAdd} />
                <FilterByNameForm
                    filterInput={this.state.filterInput}
                    onFilterInputChange={this.handleFilterInputChange}
                />
                <div className="my-5">
                    <div className="table-responsive">
                        <Table
                            items={this.state.items}
                            onDelete={this.onDelete}
                            onDeleteAll={this.onDeleteAll}
                            onSort={this.onSort}
                            filterInput={this.state.filterInput}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
