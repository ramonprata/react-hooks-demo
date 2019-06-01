import React, { Component } from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import Input from './input';
import './demo.css';
import WidthWindow from './widthWindow';

class FormWithNoHooks extends Component {
  state = {
    name: 'Ramon',
    surname: '',
    width: window.innerWidth
  };

  setDocumentTitle = () => {
    document.title = this.state.name;
  };

  componentDidMount() {
    this.setDocumentTitle();
    window.addEventListener('resize', this.handleReziseWidth);
  }

  componentDidUpdate(prevProps, prevState) {
    this.setDocumentTitle();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleReziseWidth);
  }

  handleReziseWidth = () => {
    this.setState({
      width: window.innerWidth
    });
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
