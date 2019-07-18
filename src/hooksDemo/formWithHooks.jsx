import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import '../demo.css';
import Input from './input';
import WidthWindow from './widthWindow';
import WidthWindowMemo from './widthWindowMemo';
import { useDocumentTitle, useInputForm, useWidthResize } from './customHooks';

const FormWithHooks = props => {
  const nameInput = useInputForm('Vader');
  const surnameInput = useInputForm('');
  const width = useWidthResize();
  useDocumentTitle(nameInput.value);

  return (
    <Card className="card">
      <CardHeader title="Form with hooks" />
      <CardContent>
        <Input label="Name" {...nameInput} />
        <Input label="Surname" {...surnameInput} />
        <WidthWindowMemo width={width} />
      </CardContent>
    </Card>
  );
};

export default FormWithHooks;
