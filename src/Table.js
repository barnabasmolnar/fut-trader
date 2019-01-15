import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = props => (
    <table className="table table-hover">
        <TableHeader onSort={props.onSort} onDeleteAll={props.onDeleteAll} />
        <TableBody
            items={props.items}
            onDelete={props.onDelete}
            filterInput={props.filterInput}
        />
    </table>
);

export default Table;
