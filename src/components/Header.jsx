import React from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div className="nav-bar">
      <style jsx>{`
          .nav-bar{
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 3;
            display: flex;
            width: 17%;
            height: 100%;
            max-width: 23%;
            min-height: 600px;
            min-width: 16%;
            padding: 5% 2%;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-pack: start;
            -webkit-justify-content: flex-start;
            -ms-flex-pack: start;
            justify-content: flex-start;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            background-color: #368163;
            list-style-type: none;
          }
          .logo{
            width: 200px;
            height: 150px;
          }
          .nav-list{
            text-align: center;
          }
          `}

      </style>
      <div>
        <img src={logo} className="logo"/>
        <div className="nav-list">

          <Link to="/">HOME</Link><br/>
          <Link to="/events">EVENTS</Link><br/>
          <Link to="/history">HISTORY</Link><br/>
          <Link to="/menu">MENU</Link><br/>
          <Link to="/contact">CONTACT</Link><br/>
        </div>
      </div>

    </div>
  );
}

export default Header;
