import React from 'react';
import Header from './Header';
import Home from './Home';
import ShowList from './ShowList';
import background from '../assets/images/background.jpg';
import Footer from './Footer';

import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div className="home">
      <style jsx>{`
          .body {
            background: url(${background})no-repeat top center fixed;
            background-size: cover;
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            min-height: 100vh;

          }
          `}
      </style>

      <div className="body">
        <Header/>

        <Switch>

        <Home/>
        <ShowList/>

        </Switch>

        <Footer/>
      </div>
    </div>
  );
}

export default App;
