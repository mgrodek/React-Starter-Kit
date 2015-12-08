import {
  React,
  ReactDOM,
  sinon,
  assert,
  expect,
  TestUtils
} from '../TestHelper';

import HelloStore from '../../stores/HelloStore';
import HelloSayer from '../../components/HelloSayer';

describe('HelloSayer test suite', () => {

  it('should render Hello Mariusz properly', () => {
    //given
    let sandbox = sinon.sandbox.create();
    let helloStoreStub = sandbox.stub(HelloStore, "getName");
    helloStoreStub.returns('Mariusz');

    //when
    const helloSayer = TestUtils.renderIntoDocument(<HelloSayer />);
    const helloSayerNode = ReactDOM.findDOMNode(helloSayer);

    //then
    expect(helloSayerNode.textContent).to.be.equal('Hello Mariusz!');
  });

  var sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore()
  });

});