import React from 'react';
import ActionCreators from '../actions/ActionCreators';

class HelloForm extends React.Component {

  onChange(e) {
    ActionCreators.sayHello(e.target.value);
  }

  render() {
    return (
      <div className="hello-form">
        <input type="text" onChange={this.onChange} />
      </div>
    );
  }

}

export default HelloForm;
