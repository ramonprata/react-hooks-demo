import React, { Component } from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import '../demo.css';
import Input from './input';
import WidthWindow from './widthWindow';

class FormWithNoHooks extends Component {
  state = {
    name: 'Yoda',
    surname: '',
    width: window.innerWidth
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleReziseWidth);
    this.setDocumentTitle();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setDocumentTitle();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleReziseWidth);
  }

  setDocumentTitle = () => {
    document.title = this.state.name;
  };

  handleReziseWidth = () => {
    this.setState({ width: window.innerWidth });
  };

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleSurnameChange = e => {
    this.setState({
      surname: e.target.value
    });
  };

  render() {
    const { name, surname, width } = this.state;
    return (
      <Card className="card">
        <CardHeader title="Form with no hooks" />
        <CardContent>
          <Input label="Name" value={name} onChange={this.handleNameChange} />
          <Input label="Surname" value={surname} onChange={this.handleSurnameChange} />
          <WidthWindow width={width} />
        </CardContent>
      </Card>
    );
  }
}

export default FormWithNoHooks;
