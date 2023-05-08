import React from 'react'
import {Outlet} from 'react-router-dom'
import NavbarM from '../components/Navbar'
import Footer from '../components/footer'

const LayoutMain = () => {
    return (
      <div>
        <NavbarM/>
        <Outlet /> {/* Renders child routes */}<br/><br/>
        <Footer/>
      </div>
    );
  };
export default LayoutMain  