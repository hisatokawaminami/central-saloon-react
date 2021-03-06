import React from 'react';
import PropTypes from 'prop-types';

function AdminConfirmation(props) {
  return (
    <div>
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
        <div className="card">

          <h3 >Are you authorized to update the calendar?<br/>
        (wish list: Login Form)</h3>
          <button onClick={props.onConfirmation}>Yes(Login)</button>

        </div>
      </div>
    </div>
  );
}

AdminConfirmation.propTypes = {
  onConfirmation: PropTypes.func
};
export default AdminConfirmation;
