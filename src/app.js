import React from 'react';
import ReactDOM from 'react-dom';
import HelloForm from './components/HelloForm';
import HelloSayer from './components/HelloSayer';

const helloWorld =
  (<div>
    <HelloForm />
    <HelloSayer />
  </div>);

ReactDOM.render(helloWorld, document.getElementById('wrapper'));
