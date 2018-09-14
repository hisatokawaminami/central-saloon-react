import React from 'react';

function ShowForm() {
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

      <form>
        <input
          type='text'
          id='date'
          placeholder='Date'
        /><br/>
        <input
          type='text'
          id='headliner'
          placeholder='Headliner'
        /><br/>
        <input
          type='text'
          id='opener'
          placeholder='Opener'
        /><br/>
        <input
          type='text'
          id='time'
          placeholder='Door Time'
        /><br/>
        <input
          type='text'
          id='price'
          placeholder='Ticket Price'
        /><br/>
      <button type='submit'>Save</button>
      </form>
</div>
</div>
    </div>
  );
}

export default ShowForm;
