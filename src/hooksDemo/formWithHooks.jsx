import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import Input from './input';
import WidthWindow from './widthWindow';
import '../demo.css';

const FormWithHooks = props => {
  const [name, setName] = useState('Vader');
  const handleNameChange = e => {
    setName(e.target.value);
  };

  const [surname, setSurname] = useState('');
  const handleSurnameChange = e => {
    setSurname(e.target.value);
  };

  useEffect(() => {
    document.title = name;
  }, [name]); // don't lie to hooks

  return (
    <Card className="card">
      <CardHeader title="Form with hooks" />
      <CardContent>
        <Input label="Name" value={name} onChange={handleNameChange} />
        <Input label="Surname" value={surname} onChange={handleSurnameChange} />
        <WidthWindow width={0} />
      </CardContent>
    </Card>
  );
};

export default FormWithHooks;
