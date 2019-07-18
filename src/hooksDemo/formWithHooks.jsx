import React from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import Input from './input';
import WidthWindow from './widthWindow';
import '../demo.css';
// import {  } from './customHooks';

const FormWithHooks = props => {
  return (
    <Card className="card">
      <CardHeader title="Form with hooks" />
      <CardContent>
        <Input label="Name" value="" onChange={() => {}} />
        <Input label="Surname" value="" onChange={() => {}} />
        <WidthWindow width={0} />
      </CardContent>
    </Card>
  );
};

export default FormWithHooks;
