import React, { Component } from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import '../demo.css';
import Input from './input';
import WidthWindow from './widthWindow';

class FormWithNoHooks extends Component {
  render() {
    return (
      <Card className="card">
        <CardHeader title="Form with no hooks" />
        <CardContent>
          <Input label="Name" value={''} onChange={() => {}} />
          <Input label="Surname" value={''} onChange={() => {}} />
          <WidthWindow width={0} />
        </CardContent>
      </Card>
    );
  }
}

export default FormWithNoHooks;
