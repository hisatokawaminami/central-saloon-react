import React from 'react';
import { Switch, Route } from 'react-router-dom';

import background from '../assets/images/background.jpg';

import Header from './Header';
import Home from './Home';
import ShowList from './ShowList';
import Footer from './Footer';
import Events from './Events';
import Menu from './Menu';
import Contact from './Contact';
import History from './History';
import Error404 from './Error404';


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
          <Route path='/history' component={History} />
          <Route path='/menu' component={Menu} />
          <Route path='/contact' component={Contact} />
          <Route component={Error404} />

        </Switch>

        <Footer/>
      </div>
    </div>
  );
}

export default App;
