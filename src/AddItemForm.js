import React, { Component } from "react";

class AddItemForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            LBIN: "",
            desiredProfit: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const el = event.target.name;
        this.setState({ [el]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAdd(this.state);
        this.setState({ name: "", LBIN: "", desiredProfit: "" });
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">Add new player</div>
                <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label htmlFor="name">Player name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    id="name"
                                    placeholder="Stones"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="LBIN">Lowest BIN</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="LBIN"
                                    id="LBIN"
                                    placeholder="3000"
                                    value={this.state.LBIN}
                                    onChange={this.handleChange}
                                    required
                                    min="200"
                                    step="100"
                                />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="desired-profit">
                                    Desired Profit
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="desiredProfit"
                                    id="desired-profit"
                                    placeholder="500"
                                    value={this.state.desiredProfit}
                                    onChange={this.handleChange}
                                    required
                                    min="100"
                                    step="100"
                                />
                            </div>
                            <div className="form-group col-md-3">
                                <div className="h-100 d-flex">
                                    <div className="mt-auto d-flex w-100">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-block"
                                            style={{
                                                height: "calc(2.15625rem + 2px)"
                                            }}
                                        >
                                            Add Player
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddItemForm;
