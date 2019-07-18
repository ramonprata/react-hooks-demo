import React, { useMemo, useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import PlaceHolderContent from './placeHolderContent';

const WidthWindow = ({ width }) => {
  const [dadoCarregado, setdadoCarregado] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setdadoCarregado('Meu dado chegou..');
    }, 3000);
  }, []);
  return useMemo(() => {
    return (
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <PlaceHolderContent
          dadoCarregado={dadoCarregado}
          content={
            <React.Fragment>
              {' '}
              <label htmlFor="">Width window:</label>{' '}
              <span style={{ padding: '0 10px' }}>{width}</span>
            </React.Fragment>
          }
          style={fakeStyle}
        />
      </Grid>
    );
  }, [width, dadoCarregado]);
};
var fakeStyle = {
  height: 20,
  width: '70%',
  borderRadius: 3
};
export default WidthWindow;
