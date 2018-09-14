import React from 'react';
import Show from './Show';
import PropTypes from 'prop-types';

// var masterShowList = [
//   {
//     date: '9/10',
//     headliner: 'Nirvana',
//     opener: 'Screaming Trees',
//     price: '$5',
//     time: '9pm'
//   },
//   {
//     date: '9/10',
//     headliner: 'Hillside \'77\'',
//     opener: 'Wild Arms',
//     price: '$7',
//     time: '8pm'
//   },
//   {
//     date: '9/10',
//     headliner: 'Kane Hodder',
//     opener: 'Pin Pon Dash',
//     price: '$10',
//     time: '7pm'
//   },
// ];

function ShowList(props){
  return (
    <div>
      <style jsx>{`

          .show-head {
            margin-top: 200px;
            color: white;

          }
          `}
      </style>
      <div>
        <h1 className="show-head">EVENTS</h1>
        <hr/>
        {props.showList.map((show, index)=>
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
    </div>
  );
}

ShowList.propTypes = {
  showList: PropTypes.array
};

export default ShowList;
