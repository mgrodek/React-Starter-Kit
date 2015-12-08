import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';

let name = 'world';

const HelloStore = Object.assign({ }, EventEmitter.prototype, {

  addChangeListener: function addChangeListener(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function removeChangeListener(callback) {
    this.removeListener('change', callback);
  },

  getName: function getName() {
    return name;
  }

});

function setName(saidName) {
  name = saidName;
}

function emitChange() {
  HelloStore.emit('change');
}

function handleAction(action) {
  if (action.type === 'say_hello') {
    setName(action.name);
    emitChange();
  }
}

HelloStore.dispatchToken = AppDispatcher.register(handleAction);

export default HelloStore;
