import React from 'react';
import AdminConfirmation from './AdminConfirmation';
import ShowForm from './ShowForm';

class ShowControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleConfirmation = this.handleConfirmation.bind(this);

  }

  handleConfirmation() {
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <ShowForm />;
      } else {
        currentlyVisibleContent = <AdminConfirmation onConfirmation={this.handleConfirmation} />;

    }
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
        <h1>controller</h1>
        <div className="card">

        {currentlyVisibleContent}
      </div>
    </div>
    </div>
    );
  }
}

export default ShowControl;
