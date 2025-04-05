import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



const Home = () => (
    <>
    <main>Home Main</main>
    <sidebar> Home side</sidebar>
    </>
);

const Account = () =>(
<>
<main>Account Main</main>
<sidebar>Account Sidebar</sidebar>
</>
);

export default function ShowAccount() {
  return (
    <Router>
<Routes>
<Route path = "/Home" element = {<Home/>}> </Route>
<Route path = "/Account" element= {<Account/>}> </Route>
</Routes>
    </Router>
  )
}
