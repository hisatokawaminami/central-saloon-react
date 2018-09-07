import React from 'react';
import Show from './Show';

var masterShowList = [
  {
    date: '9/10',
    headliner: 'Nirvana',
    opener: 'Screaming Trees',
    price: '$5',
    time: '9pm'
  },
  {
    date: '9/10',
    headliner: 'Hillside \'77\'',
    opener: 'Wild Arms',
    price: '$7',
    time: '8pm'
  },
  {
    date: '9/10',
    headliner: 'Kane Hodder',
    opener: 'Pin Pon Dash',
    price: '$10',
    time: '7pm'
  },
];

function ShowList(){
  return (
    <div>
      <hr/>
      {masterShowList.map((show, index)=>
        <Show
          date={show.date}
          headliner={show.headliner}
          opener={show.opener}
          price={show.price}
          time={show.time}
          key={index}
        />
      )}
    </div>
  );
}

export default ShowList;
