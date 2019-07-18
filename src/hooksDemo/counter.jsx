import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, Button, Grid } from '@material-ui/core';
import '../demo.css';
const counter = props => {
  const [count, setCount] = useState(0);

  const handleAlertClick = () => {
    setTimeout(() => {
      alert('You clicked on: ' + count);
    }, 3000);
  };

  return (
    <Card className="card">
      <CardHeader title="Counter with hooks" />
      <CardContent>
        <Grid container direction="column" justify="space-between" alignItems="center">
          <h3>{count}</h3>
          <Button onClick={() => setCount(count + 1)} variant="contained">
            Incremment
          </Button>
          <hr />
          <Button onClick={handleAlertClick} variant="contained">
            Alert
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default counter;
