import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



const Layout = (props) => (
    <>
    <main>{props.content}</main>
    <sidebar> {props.sidebar}</sidebar>
    </>
);

const Home = () => <Layout content="Home Main" sidebar="Side Main" />;

const Account = () => <Layout content="Account Main" sidebar="Account Sidebar" />;

export default function ShowProps() {
  return (
    <Router>
<Routes>
<Route path = "/Home" element = {<Home/>}> </Route>
<Route path = "/Account" element= {<Account/>}> </Route>
</Routes>
    </Router>
  )
}
