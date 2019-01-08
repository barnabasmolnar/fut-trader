import React from "react";

const TableHeader = props => {
    function handleSort(sortProp) {
        props.onSort(sortProp);
    }

    return (
        <thead>
            <tr>
                <th title="Sort by name" onClick={() => handleSort("name")}>
                    Name
                </th>
                <th
                    title="Sort by Lowest Buy It Now value"
                    onClick={() => handleSort("LBIN")}
                >
                    Lowest BIN
                </th>
                <th
                    title="Sort by desired profit"
                    onClick={() => handleSort("desiredProfit")}
                >
                    Desired profit
                </th>
                <th
                    title="Sort by Recommended Purchase Price"
                    onClick={() => handleSort("RPP")}
                >
                    RPP
                </th>
                <th
                    title="Sort by date added"
                    onClick={() => handleSort("createdAt")}
                >
                    Added
                </th>
                <th width="10%">Delete</th>
            </tr>
        </thead>
    );
};

export default TableHeader;
