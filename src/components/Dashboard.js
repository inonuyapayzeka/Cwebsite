import React, { Component } from 'react';
import About from './About';
import Info from './Info';
import Announcement from './Announcement';
import Footer from './Footer';
import Home from './Home';
import {  Route, Routes } from "react-router-dom";
import Navi from "./Navbar"
import Contact from './Contact';
import Teams from './Teams';
import LoginPage from './LoginPage';
import Blog from './Blog';
import RegisterPage from './RegisterPage';
class Dashboard extends Component {
    render() {
        return (
            <div >
                <Routes>
                    <Route exact path='Home'element={ < Home /> } ></Route>
                    <Route exact path=''element={ < Home /> } ></Route>
                    <Route exact path='Cwebsite'element={ < Home /> } ></Route>
                    <Route exact path='Contact'element={ < Contact /> } ></Route>
                    <Route exact path='teams'element={ < Teams /> } ></Route>
                    <Route exact path='LoginPage'element={ < LoginPage /> } ></Route>
                    <Route exact path='Blog'element={ < Blog /> } ></Route>
                    <Route exact path='Register'element={ < RegisterPage  /> } ></Route>

              </Routes>
          {/* <Footer></Footer> */}
            </div>
        );
    }
}

export default Dashboard;