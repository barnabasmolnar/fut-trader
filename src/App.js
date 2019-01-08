import React, { Component } from "react";
import Table from "./Table";
import AddItemForm from "./AddItemForm";
import uuidv1 from "uuid/v1";
import h from "./helpers";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            sortBy: "createdAt",
            sortOrder: "asc"
        };

        this.onAdd = this.onAdd.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onSort = this.onSort.bind(this);
    }

    onAdd(itemObj) {
        const RPP = h.roundRPP(h.calcRPP(itemObj.LBIN, itemObj.desiredProfit));

        const finalItemObj = {
            name: itemObj.name,
            LBIN: parseInt(itemObj.LBIN),
            desiredProfit: parseInt(itemObj.desiredProfit),
            RPP,
            createdAt: new Date(),
            id: uuidv1()
        }

        const items = this.state.items.slice();
        items.push(finalItemObj);

        this.setState({ items });
    }

    onDelete(itemID) {
        let items = this.state.items.slice();
        items = items.filter(item => item.id !== itemID);

        this.setState({ items });
    }

    onSort(sortProp) {
        let items = this.state.items.slice();

        if (this.state.sortOrder === "asc") {
            items = items.sort((a, b) => h.compareFunc(a, b, sortProp, "desc"));
            this.setState({ items, sortBy: sortProp, sortOrder: "desc" });
        } else {
            items = items.sort((a, b) => h.compareFunc(a, b, sortProp, "asc"));
            this.setState({ items, sortBy: sortProp, sortOrder: "asc" });
        }
    }

    render() {
        return (
            <div className="container my-5">
                <AddItemForm onAdd={this.onAdd} />
                <div className="my-5">
                    <div className="table-responsive">
                        <Table
                            items={this.state.items}
                            onDelete={this.onDelete}
                            onSort={this.onSort}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
