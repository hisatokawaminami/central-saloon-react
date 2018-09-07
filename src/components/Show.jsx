import React from 'react';
import PropTypes from 'prop-types';

function Show(props){
  return(
    <div>
      <style jsx>{`
        .showCard{
          background-color: #f4e9cf;
        }
        `}
      </style>
      <div className="showCard">

        <h4>{props.date}</h4>
        <h3>{props.headliner}</h3>
        <h4>{props.opener}</h4>
        <p><em>{props.time} | {props.price}</em></p>
      </div>
    </div>
  );
}
Show.propTypes = {
  date: PropTypes.string.isRequired,
  headliner: PropTypes.string.isRequired,
  opener: PropTypes.string,
  time: PropTypes.string,
  price: PropTypes.string
};
export default Show;
