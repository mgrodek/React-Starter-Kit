import AppDispatcher from '../dispatcher/AppDispatcher';

function sayHello(name) {
  const action = {
    type: 'say_hello',
    name: name
  };

  AppDispatcher.dispatch(action);
}

export default {
  sayHello: sayHello
};
