import React from 'react';

function ShowForm() {
  let _date = null;
  let _headliner = null;
  let _opener = null;
  let _time = null;
  let _price = null;

  function handleSubmission(event) {
    event.preventDefault();
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

export default ShowForm;
