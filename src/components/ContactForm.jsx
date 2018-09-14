import React from 'react';
import map from '../assets/images/map.png';

function ContactForm(){
  return (
    <div>
      <style jsx>{`

          h1 {
            margin-top: 200px;
            color: white;

          }
          .card{
            background-color: #f4e9cf;
            margin-bottom: 0px;
          }
          .contactInfo{

          }
          .map {
            height: 350px;
          }

          `}
        </style>

        <h1>CONTACT</h1>

        <div className="card">
          <div className="row">
            <div className="col-md-5">
              <h3>DROP US A LINE</h3>
              <form >
                <p>*First and last name</p>
                <input
                  type='text'
                  id='name'
                  ref={(input) => {_name = input;}}/>
                <p>*Email address</p>
                <input
                  type='text'
                  id='email'
                  ref={(input) => {_email = input;}}/>
                <p>*Phone number</p>
                <input
                  type='text'
                  id='phone'
                  ref={(input) => {_phone = input;}}/>
                <p>*Position within the band/organization</p>
                <input
                  type='text'
                  id='position'
                  ref={(input) => {_position = input;}}/>
                <p>Type of music</p>
                <input
                  type='text'
                  id='genre'
                  ref={(input) => {_genre = input;}}/>
                <p>Link to website</p>
                <input
                  type='text'
                  id='website'
                  ref={(input) => {_website = input;}}/>
                <p>Link to Facebook page</p>
                <input
                  type='text'
                  id='facebook'
                  ref={(input) => {_facebook = input;}}/>
                <p>Link to Facebook page</p>
                <input
                  type='text'
                  id='instagram'
                  ref={(input) => {_instagram = input;}}/>
                <p>Other relevant links (to audio, video, other social media channels, etc)</p>
                <input
                  type='text'
                  id='other'
                  ref={(input) => {_other = input;}}/>
                <p>*Message</p>
                <textarea
                  id='message'
                  ref={(textarea) => {_message = textarea;}}/>
                <br/>
                <button type='submit'>SEND</button>
              </form>
            </div>
            <div className="col-md-5">
              <p className="contactInfo">The Central appeal of The Central is the people. The regulars, the performers, the bar staff, and even a few well-loved dogs from time to time.
                (206) 622-0209
                207 1ST AVENUE SOUTH, SEATTLE, WA 98104
                OPEN 11AM-2AM DAILY</p>
                <img className="map" src={map}/>

            </div>
          </div>
        </div>
      </div>
    );
  }

  export default ContactForm;
