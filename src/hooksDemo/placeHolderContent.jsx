import React from 'react';
import { withStyles } from '@material-ui/core/styles';
const PlaceHolderContent = props => {
  const { classes, content, dadoCarregado } = props;

  return (
    <React.Fragment>
      {!dadoCarregado ? (
        <span className={classes.animatedBackground} style={{ ...props.style }} />
      ) : (
        content
      )}
    </React.Fragment>
  );
};

const styles = theme => {
  return {
    '@keyframes placeHolderShimmer': {
      '0%': {
        backgroundPosition: '-468px 0'
      },
      '100%': {
        backgroundPosition: '468px 0'
      }
    },
    animatedBackground: {
      animationDuration: '1s',
      animationFillMode: 'forwards',
      animationIterationCount: 'infinite',
      animationName: 'placeHolderShimmer',
      animationTimingFunction: 'linear',
      background: 'linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%)',
      backgroundSize: '800px 104px',
      height: 96,
      position: 'relative'
    }
  };
};

PlaceHolderContent.defaultProps = {
  content: null,
  dadoCarregado: false
};
export default withStyles(styles)(PlaceHolderContent);
