import React from 'react';
import background from '../assets/images/background.jpg';

function Footer(){
  return (
    <div className="background">
      <style jsx>{`
          body {
            background: url(${background})no-repeat top center fixed;
            background-size: cover;
            margin-top: 100px;
            padding: 0;
            height: 100%;
            width: 100%;
          }
          `}
      </style>
      <body className="body">
        <div>
          <h1>test home????</h1>
          <h1>test home????</h1>


        </div>
      </body>
    </div>
  );
}

export default Footer;
