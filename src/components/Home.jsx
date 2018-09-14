import React from 'react';
import ShowList from './ShowList';

function Home(){
  return (
    <div className="home">
      <style jsx>{`

          .home-head {
            margin-top: 200px;
            color: white;
          }
          `}
      </style>

      <div>
        <div className="home-head">
          <div className="head">

            <h3>HOME OF THE</h3>
            <h1>SEATTLE SOUND</h1>
            <p>SEATTLE’S BEST NEW MUSIC IN ITS OLDEST SALOON</p>
          </div>
        </div>
        <ShowList />
      </div>
    </div>
  );
}

export default Home;
