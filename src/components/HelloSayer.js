import React from 'react';
import HelloStore from '../stores/HelloStore';

class HelloSayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: HelloStore.getName() };
  }

  componentDidMount() {
    HelloStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    HelloStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState({ name: HelloStore.getName() });
  }

  render() {
    return <p>Hello {this.state.name}!</p>;
  }

}

export default HelloSayer;
