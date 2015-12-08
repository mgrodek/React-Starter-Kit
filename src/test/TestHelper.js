import React from 'react';
import ReactDOM from 'react-dom';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import TestUtils from 'react-addons-test-utils';

let { assert, expect } = chai;

chai.should();
chai.use(sinonChai);

export {
  React,
  ReactDOM,
  chai,
  sinon,
  sinonChai,
  assert,
  expect,
  TestUtils
}