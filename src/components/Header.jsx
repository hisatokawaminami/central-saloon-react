import React from 'react';
import logo from '../assets/images/logo.png';
import instagramLogo from '../assets/images/instagram.png';
import facebookLogo from '../assets/images/facebook.png';
import twitterLogo from '../assets/images/twitter.png';
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
          .socialMediaLogo {
            width: 30px;
            height: 30px;
            opacity: 0.5;
            align-items: center;
            margin: 5px;
          }
          .link {
            color: white;

          }
          `}

      </style>
      <div>
        <img src={logo} className="logo"/>
        <div className="nav-list" >
          <br/><br/>
          <Link to="/" className="link">HOME</Link><br/><br/>
          <Link to="/events" className="link">EVENTS</Link><br/><br/>
          <Link to="/history" className="link">HISTORY</Link><br/><br/>
          <Link to="/menu"className="link">MENU</Link><br/><br/>
          <Link to="/contact"className="link">CONTACT</Link><br/><br/><br/>



          <img src={instagramLogo} className="socialMediaLogo"/>
          <img src={facebookLogo} className="socialMediaLogo"/>
          <img src={twitterLogo} className="socialMediaLogo"/>
        </div>
      </div>

    </div>
  );
}

export default Header;
