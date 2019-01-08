import React, { Component } from "react";
import h from "./helpers";
import distanceInWordsStrict from "date-fns/distance_in_words_strict";

class TableItemRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTime: "now"
        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.setState({ currentTime: new Date() }),
            10000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    handleDelete() {
        this.props.onDelete(this.props.id);
    }

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.LBIN}</td>
                <td>{this.props.desiredProfit}</td>
                <td className="h4 font-weight-bold">
                    {h.formatRPP(
                        h.roundRPP(
                            h.calcRPP(this.props.LBIN, this.props.desiredProfit)
                        )
                    )}
                </td>
                <td width="20%">
                    {this.state.currentTime === "now"
                        ? "Just now"
                        : distanceInWordsStrict(
                              this.state.currentTime,
                              this.props.createdAt,
                              { addSuffix: true }
                          )}
                </td>
                <td width="10%">
                    <button
                        className="btn btn-outline-danger d-flex p-1 btn--delete"
                        onClick={this.handleDelete}
                    >
                        <svg
                            viewBox="0 0 20 20"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ width: "20px" }}
                        >
                            <g
                                id="Page-1"
                                stroke="none"
                                strokeWidth="1"
                                fillRule="evenodd"
                            >
                                <g id="icon-shape">
                                    <path
                                        d="M2,2 L18,2 L18,4 L2,4 L2,2 Z M8,0 L12,0 L14,2 L6,2 L8,0 Z M3,6 L17,6 L16,20 L4,20 L3,6 Z M8,8 L9,8 L9,18 L8,18 L8,8 Z M11,8 L12,8 L12,18 L11,18 L11,8 Z"
                                        id="Combined-Shape"
                                    />
                                </g>
                            </g>
                        </svg>
                    </button>
                </td>
            </tr>
        );
    }
}

export default TableItemRow;
