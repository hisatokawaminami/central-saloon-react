import React from 'react';
import Header from './Header';
import Home from './Home';
import ShowList from './ShowList';
import background from '../assets/images/background.jpg';
import Footer from './Footer';
import Events from './Events';
import Menu from './Menu';
import Contact from './Contact';
import History from './History';

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

          <Route exact path='/' component={Home} />
          <Route path='/events' component={ShowList} />


        </Switch>

        <Footer/>
      </div>
    </div>
  );
}

export default App;
