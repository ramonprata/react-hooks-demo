import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import FormWithHooks from './formWithHooks';
import FormWithNoHooks from './formWithNoHooks';
import Counter from './counter';
import CounterClass from './counterClass';
import Controls from './controls';

const DemoPage = () => {
  const [formSelected, setFormSelected] = useState('both');

  function handleFormChange(e) {
    setFormSelected(e.target.value);
  }

  return (
    <Grid container direction="column" justify="space-between" style={{ padding: '10vw' }}>
      <Controls handleFormChange={handleFormChange} formSelected={formSelected} />
      <Grid container item direction="row" justify="space-evenly">
        {(formSelected === 'noHooks' || formSelected === 'both') && <CounterClass />}
        {(formSelected === 'hooks' || formSelected === 'both') && <Counter />}

        {/* {(formSelected === 'noHooks' || formSelected === 'both') && <FormWithNoHooks />}
        {(formSelected === 'hooks' || formSelected === 'both') && <FormWithHooks />} */}
      </Grid>
    </Grid>
  );
};

export default DemoPage;
