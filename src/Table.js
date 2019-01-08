import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = props => (
    <table className="table table-hover">
        <TableHeader onSort={props.onSort} />
        <TableBody items={props.items} onDelete={props.onDelete} />
    </table>
);

export default Table;
