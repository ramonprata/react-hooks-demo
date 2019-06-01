import React from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import './demo.css';
import Input from './input';
import WidthWindow from './widthWindow';
import { useDocumentTitle } from './customHooks/useDocumentTitle';
import { useWidthResize } from './customHooks/useWidthResize';
import { useInputForm } from './customHooks/useInputForm';

const FormWithHooks = props => {
  const nameInput = useInputForm('Ramon');
  const surnameInput = useInputForm('');
  const width = useWidthResize();
  useDocumentTitle(nameInput.value);
  return (
    <Card className="card">
      <CardHeader title="Form with hooks" />
      <CardContent>
        <Input label="Name" {...nameInput} />
        <Input label="Surname" {...surnameInput} />
        <WidthWindow width={width} />
      </CardContent>
    </Card>
  );
};

export default FormWithHooks;
