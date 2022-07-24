import React from "react";

export const Taskform = (props) => {
    //this component will be used to create a new task

    const [taskName, setTaskName] = React.useState("");
    const [taskDescription, setTaskDescription] = React.useState("");
    const [addTask, setAddTask] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName != "") props.addTask(taskName, taskDescription);
    };

    const submitButton = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            onClick={handleSubmit}
            className={addTask ? "addButton" : "addButtonDisabled"}
        >
            <path
                fill="#85cbf8"
                d="M31 3A28 28 0 1 0 31 59A28 28 0 1 0 31 3Z"
            ></path>
            <path
                fill="#c2cde7"
                d="M31,3A28,28,0,1,0,59,31,28,28,0,0,0,31,3Zm0,50A22,22,0,1,1,46.17,15.07l.68.67q.39.4.75.82A22,22,0,0,1,31,53Z"
            ></path>
            <path
                fill="#acb7d0"
                d="M31,53A22,22,0,0,1,9,31H7.34a4,4,0,0,0-3.95,4.71,28,28,0,0,0,55.21,0A4,4,0,0,0,54.66,31H53A22,22,0,0,1,31,53Z"
            ></path>
            <path
                fill="#8d6c9f"
                d="M31,2A29,29,0,1,0,60,31,29,29,0,0,0,31,2Zm0,56A27,27,0,1,1,58,31,27,27,0,0,1,31,58Z"
            ></path>
            <path
                fill="#8d6c9f"
                d="M31 50a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V51A1 1 0 0 0 31 50zM37 50.08a1 1 0 0 0-1.93.52l.52 1.93A1 1 0 0 0 37.53 52zM21.75 47.52a1 1 0 0 0-1.37.37l-1 1.73a1 1 0 1 0 1.73 1l1-1.73A1 1 0 0 0 21.75 47.52zM41.62 47.89a1 1 0 1 0-1.73 1l1 1.73a1 1 0 1 0 1.73-1zM26.21 49.37a1 1 0 0 0-1.22.71L24.47 52a1 1 0 1 0 1.93.52l.52-1.93A1 1 0 0 0 26.21 49.37z"
            ></path>
            <path
                fill="#faefde"
                d="M43,30H32V19a1,1,0,0,0-2,0V30H19a1,1,0,0,0,0,2H30V43a1,1,0,0,0,2,0V32H43a1,1,0,0,0,0-2Z"
            ></path>
            <path
                fill="#8d6c9f"
                d="M38.35 11.32a21 21 0 0 1 2.1.92 1 1 0 0 0 .9-1.79 23 23 0 0 0-2.3-1 1 1 0 1 0-.7 1.87zM16.15 16.15a21.08 21.08 0 0 1 18.19-5.88 1 1 0 1 0 .32-2 23 23 0 0 0-19.92 39 1 1 0 0 0 1.41-1.41A21 21 0 0 1 16.15 16.15zM47.26 14.74a23.19 23.19 0 0 0-2.09-1.86 1 1 0 0 0-1.23 1.57 21.26 21.26 0 0 1 1.91 1.7 21 21 0 0 1 0 29.7 1 1 0 1 0 1.41 1.41A23 23 0 0 0 47.26 14.74z"
            ></path>
        </svg>
    );

    return (
        <div className="formWrapper">
            <form onSubmit={handleSubmit} className="form">
                <section>
                    <label htmlFor="taskName">Task name:</label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setTaskName(e.target.value);
                        }}
                        id="taskName"
                    />
                </section>
                {submitButton}
                <section>
                    <label htmlFor="taskDescription">Task description:</label>
                    <input
                        type="text"
                        onChange={(e) => setTaskDescription(e.target.value)}
                        id="taskDescription"
                    />
                </section>
            </form>
        </div>
    );
};
