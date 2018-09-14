import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../assets/images/background.jpg';

import Header from './Header';
import Home from './Home';
import ShowList from './ShowList';
import Footer from './Footer';
import Menu from './Menu';
import Contact from './Contact';
import History from './History';
import Error404 from './Error404';
import Background from './Background';
import ContactForm from './ContactForm';
import ShowForm from './ShowForm';
import ShowControl from './ShowControl';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterShowList: []
    };
    this.handleAddShowToList = this.handleAddShowToList.bind(this);
  }

  handleAddShowToList(newShow){
    var newMasterShowList = this.state.masterShowList.slice();
    newMasterShowList.push(newShow);
    this.setState({masterShowList: newMasterShowList});
  }

  render(){
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
          <Background />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/events' render={()=><ShowList showList={this.state.masterShowList} />} />
            <Route path='/history' component={History} />
            <Route path='/menu' component={Menu} />
            <Route path='/contact' component={ContactForm} />
            <Route path='/showform' render={()=><ShowControl onNewShowCreation={this.handleAddShowToList} />} />
            <Route component={Error404} />

          </Switch>

          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
