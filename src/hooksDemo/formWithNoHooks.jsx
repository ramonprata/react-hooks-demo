import React, { Component } from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import '../demo.css';
import Input from './input';
import WidthWindow from './widthWindow';

class FormWithNoHooks extends Component {
  state = {
    name: 'Yoda',
    surname: ''
  };

  componentDidMount() {
    document.title = this.state.name;
    // this.setDocumentTitle();
  }

  componentDidUpdate(prevProps, prevState) {
    document.title = this.state.name;
    // this.setDocumentTitle();
  }

  // setDocumentTitle = () => {
  //   document.title = this.state.name;
  // };

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
    const { name, surname } = this.state;
    return (
      <Card className="card">
        <CardHeader title="Form with no hooks" />
        <CardContent>
          <Input label="Name" value={name} onChange={this.handleNameChange} />
          <Input label="Surname" value={surname} onChange={this.handleSurnameChange} />
          <WidthWindow width={0} />
        </CardContent>
      </Card>
    );
  }
}

export default FormWithNoHooks;
