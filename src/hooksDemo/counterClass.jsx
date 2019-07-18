import React, { Component } from 'react';
import { Card, CardHeader, CardContent, Button, Grid } from '@material-ui/core';

class CounterClass extends Component {
  state = {
    count: 0
  };
  handleAlertClick = () => {
    setTimeout(() => {
      alert('You clicked on: ' + this.state.count);
    }, 3000);
  };
  handleCount = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  };
  render() {
    return (
      <Card className="card">
        <CardHeader title="Counter with no hooks" />
        <CardContent>
          <Grid container direction="column" justify="space-between" alignItems="center">
            <h3>{this.state.count}</h3>
            <Button onClick={this.handleCount} variant="contained">
              Incremment
            </Button>
            <hr />
            <Button onClick={this.handleAlertClick} variant="contained">
              Alert
            </Button>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default CounterClass;
