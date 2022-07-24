import React from "react";
import { Header } from "./Header";
import { Tasklist } from "./Tasklist";
import "./style.css";

export const App = () => {
    return (
        <>
            <Header />
            <Tasklist />
        </>
    );
};
