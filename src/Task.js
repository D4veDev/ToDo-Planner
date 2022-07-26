import React, { useState } from "react";
import PropTypes from "prop-types";

export const Task = (props) => {
    const [toggleDesc, setToggleDesc] = useState(false);
    const [toggleComplete, setToggleComplete] = useState(false);

    const handleClick = () => {
        setToggleComplete(!toggleComplete);
    };

    const handleDescClick = () => {
        setToggleDesc(!toggleDesc);
    };

    return (
        <div>
            <div className="taskWrapper">
                <div className="left">
                    <input type="checkbox" onClick={handleClick} />
                    <h2 className={toggleComplete ? "done" : "ongoing"}>
                        {props.name}
                    </h2>
                </div>
                {/* CHECKBOX */}
                <div className="right">
                    <button onClick={() => props.deleteTask(props.index)}>
                        Delete
                    </button>
                    {props.description !== "" && (
                        <button onClick={handleDescClick}>
                            {toggleDesc ? "Hide" : "Show"}
                        </button>
                    )}
                </div>
            </div>

            {toggleDesc && (
                <div className="description">{props.description}</div>
            )}
        </div>
    );
};

Task.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    deleteTask: PropTypes.func.isRequired,
};
