import React from 'react';
import background from '../assets/images/background.jpg';

function Background() {
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
      
      </div>
    </div>
  );
}
export default Background;
