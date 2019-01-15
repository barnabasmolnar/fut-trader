import React from "react";

const FilterByNameForm = props => {
    
    function handleChange(event) {
        props.onFilterInputChange(event.target.value);
    }

    return (
        <form>
            <div className="my-5 py-3 row">
                <label
                    htmlFor="name-filter"
                    className="col-sm-2 col-form-label"
                >
                    Filter by name
                </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        name="name-filter"
                        id="name-filter"
                        placeholder="Stones"
                        value={props.filterInput}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
        </form>
    );
};

export default FilterByNameForm;