import React from 'react';
import PropTypes from 'prop-types';

function ShowForm(props) {
  let _date = null;
  let _headliner = null;
  let _opener = null;
  let _time = null;
  let _price = null;

  function handleSubmission(event) {
    event.preventDefault();
    props.onNewShowCreation({date: _date.value, headliner: _headliner.value, opener: _opener.value, time: _time.value, price: _price.value});

    _date.value = '';
    _headliner.value = '';
    _opener.value = '';
    _time.value = '';
    _price.value = '';
  }
  
  return (
    <div >
      <style jsx>{`

          h1 {
            margin-top: 200px;
            color: white;

          }
          .card{
            background-color: #f4e9cf;
          }
          `}
      </style>
      <div>
        <h1>Add New Show</h1>
        <div className="card">

          <form onSubmit={handleSubmission}>
            <input
              type='text'
              id='date'
              placeholder='Date'
              ref={(input) => {_date = input;}}/>
            <br/>
            <input
              type='text'
              id='headliner'
              placeholder='Headliner'
              ref={(input) => {_headliner = input;}}/>
            <br/>
            <input
              type='text'
              id='opener'
              placeholder='Opener'
              ref={(input) => {_opener = input;}}/>
            <br/>
            <input
              type='text'
              id='time'
              placeholder='Door Time'
              ref={(input) => {_time = input;}}/>
            <br/>
            <input
              type='text'
              id='price'
              placeholder='Ticket Price'
              ref={(input) => {_price = input;}}/>
            <br/>
            <button type='submit'>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}

ShowForm.propTyeps = {
  onNewShowCreation: PropTypes.func
};

export default ShowForm;
