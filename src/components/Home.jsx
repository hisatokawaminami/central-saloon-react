import React from 'react';
import background from '../assets/images/background.jpg';
import ShowList from './ShowList';

function Home(){
  return (
    <div className="home">
      <style jsx>{`
          body {
            background: url(${background})no-repeat top center fixed;
            background-size: cover;
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
          }
          .home-head {
            color: white;
          }
          `}
      </style>

      <div>
        <div className="home-head">
          <h3>HOME OF THE</h3>
          <h1>SEATTLE SOUND</h1>
          <p>SEATTLE’S BEST NEW MUSIC IN ITS OLDEST SALOON</p>
        </div>
        <ShowList />
      </div>
    </div>
  );
}

export default Home;
