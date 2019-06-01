import React, { useState } from 'react';
import { Grid, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import FormWithHooks from './formWithHooks';
import FormWithNoHooks from './formWithNoHooks';

const DemoPage = () => {
  const [formSelected, setFormSelected] = useState('both');

  function handleFormChange(e) {
    setFormSelected(e.target.value);
  }

  return (
    <Grid container direction="column" justify="space-between" style={{ padding: '10vw' }}>
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
      <Grid container item direction="row" justify="space-evenly">
        {(formSelected === 'noHooks' || formSelected === 'both') && <FormWithNoHooks />}
        {(formSelected === 'hooks' || formSelected === 'both') && <FormWithHooks />}
      </Grid>
    </Grid>
  );
};

export default DemoPage;
