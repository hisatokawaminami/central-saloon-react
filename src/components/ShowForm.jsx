import React from 'react';

function ShowForm() {
  return (
    <div>
      <form>
        <input
          type='text'
          id='date'
          placeholder='Date'
        />
        <input
          type='text'
          id='headliner'
          placeholder='Headliner'
        />
        <input
          type='text'
          id='opener'
          placeholder='Opener'
        />
        <input
          type='text'
          id='time'
          placeholder='Door Time'
        />
        <input
          type='text'
          id='price'
          placeholder='Ticket Price'
        />
      </form>
    </div>
  );
}

export default ShowForm;
