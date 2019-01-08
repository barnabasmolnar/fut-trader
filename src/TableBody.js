import React from "react";
import TableItemRow from "./TableItemRow";

const TableBody = props => (
    <tbody>
        {props.items.map(item => (
            <TableItemRow key={item.id} {...item} onDelete={props.onDelete} />
        ))}
    </tbody>
);

export default TableBody;
