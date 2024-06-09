import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import { Route, Router, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import Nav from './components/Nav.jsx';
import Trichy from './components/Trichy.jsx';
import Namakkal from './components/Namakkal.jsx';
import Cbe from './components/Cbe.jsx';
import Menu from './Menu.jsx';
import ItemList from './components/Cart.jsx';
import Login from './components/login.jsx';
import SignUpPage from './components/signup.jsx';
import LoginPage from './components/login.jsx';
import AdminForm from './components/AdminForm.jsx';
import AdminLogin from './components/AdminLogin.jsx';
import UserSelectionPage from './components/UserSelectionPage.jsx';
import OrderHistoryPage from './components/OrderHistoryPage.jsx';
import Rest from './components/ResturantList.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
     <Route path='/' element= {<UserSelectionPage/>} />
    <Route path='/signin' element= {<LoginPage/>} />
    <Route path='/nav' element= {<Nav/>} />
    <Route path='/cbe' element= {<Cbe/>} />
    <Route path='/trichy' element= {<Trichy/>} />
    <Route path='/namakkal' element= {<Namakkal/>} />
    <Route path='/menupage' element= {<Menu/>} />
    <Route path='/cart' element= {<ItemList/>} />
    <Route path='/signup' element= {<SignUpPage/>} />
    <Route path='/login' element= {<Login/>} />
    <Route path='/admin' element= {<AdminForm/>} />
    <Route path='/adminlog' element= {<AdminLogin/>} />
    <Route path='/history' element= {<OrderHistoryPage/>} />
    <Route path='/rest' element= {<Rest/>} />
   </Routes>
  </BrowserRouter>
)