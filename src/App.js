import './App.css';
import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Book from './components/Customar/Book/Book/Book';
import Review from './components/Customar/Review/Review';

import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import OrderList from './components/Admin/OrderList/OrderList';
import ManageServices from './components/Admin/ManageServices/ManageServices';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import BookingList from './components/Customar/BookingList/BookingList/BookingList';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
        <PrivateRoute path="/book/:bookName">
            <Book></Book>
        </PrivateRoute>
        <PrivateRoute path="/bookingList">
            <BookingList></BookingList>
        </PrivateRoute>
        <PrivateRoute path="/review">
            <Review></Review>
        </PrivateRoute>

        <PrivateRoute path="/orderList">
            <OrderList></OrderList>
        </PrivateRoute>
        <PrivateRoute path="/addService">
            <AddService></AddService>
        </PrivateRoute>
        <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
        </PrivateRoute>
        <PrivateRoute path="/manageServices">
            <ManageServices></ManageServices>
        </PrivateRoute>

        <Route path="/login">
              <Login></Login>
        </Route>
        <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App; 