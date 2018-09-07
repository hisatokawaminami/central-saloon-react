import React from 'react';
import background from '../assets/images/background.jpg';

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
          `}
      </style>

      <div>
        <h1>test home????</h1>
        <h1>test home????</h1>


      </div>
    </div>
  );
}

export default Home;
