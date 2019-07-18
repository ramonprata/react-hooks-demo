import React from 'react';
import { Grid, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
const controls = props => {
  const { handleFormChange, formSelected } = props;
  return (
    <Grid container direction="column" alignItems="center">
      <RadioGroup
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          minWidth: 500
        }}
        aria-label="Forms"
        name="radioforms"
        value={formSelected}
        onChange={handleFormChange}
      >
        <FormControlLabel
          value="noHooks"
          control={<Radio />}
          label="With no hooks"
          className="radioInline"
        />
        <FormControlLabel
          value="hooks"
          control={<Radio />}
          label="With hooks"
          className="radioInline"
        />
        <FormControlLabel value="both" control={<Radio />} label="Both" className="radioInline" />
      </RadioGroup>
    </Grid>
  );
};

export default controls;
