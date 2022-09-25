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
class Dashboard extends Component {
    render() {
        return (
            <div >
                <Routes>
                    <Route exact path=''element={ < Home /> } ></Route>
                    <Route exact path='home'element={ < Home /> } ></Route>
                    <Route exact path='Contact'element={ < Contact /> } ></Route>
                    <Route exact path='teams'element={ < Teams /> } ></Route>
                    
              </Routes>
          <Footer></Footer>
            </div>
        );
    }
}

export default Dashboard;