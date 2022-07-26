import React, { useState } from "react";
import { Task } from "./Task";
import { Taskform } from "./Taskform";

export const Tasklist = (props) => {
    const [taskList, setTaskList] = useState([]);

    const deleteTask = (index) => {
        const newTaskList = taskList.filter((task) => task.key !== index);
        setTaskList(newTaskList);
    };

    const addTask = (name, description) => {
        setTaskList((prevTaskList) => {
            return [
                ...prevTaskList,
                { name, description, key: prevTaskList.length + 1 },
            ];
        });
    };

    return (
        <>
            <Taskform addTask={addTask} />
            <div className="taskList">
                {taskList.map((task) => (
                    <Task
                        key={task.key}
                        index={task.key}
                        name={task.name}
                        description={task.description}
                        deleteTask={deleteTask}
                    />
                ))}
            </div>
        </>
    );
};
