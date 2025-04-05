import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

const Layout = (props) => (
    <>
    <main>{props.content}</main>
    <sidebar> {props.sidebar}</sidebar>
    </>
);
