import React from "react";
import TableItemRow from "./TableItemRow";

const TableBody = props => {
    const filtered = props.items.filter(item => {
        const name = item.name.toUpperCase();
        const filterInput = props.filterInput.toUpperCase();
        return name.includes(filterInput);
    });

    return (
        <tbody>
            {filtered.map(item => (
                <TableItemRow
                    key={item.id}
                    {...item}
                    onDelete={props.onDelete}
                />
            ))}
        </tbody>
    );
};

export default TableBody;
