import React, { useMemo, useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

const WidthWindow = ({ width }) => {
  return useMemo(() => {
    return (
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <React.Fragment>
          {' '}
          <label htmlFor="">Width window:</label> <span style={{ padding: '0 10px' }}>{width}</span>
        </React.Fragment>
      </Grid>
    );
  }, [width]);
};

export default WidthWindow;
