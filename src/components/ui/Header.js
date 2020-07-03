import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

const useStyles = makeStyles(theme => ({
  header: {
    background: theme.palette.secondary,
  },
  band: {
    background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
    height: 5
  },
  toolBarMargin: {
    ...theme.mixins.toolbar
  }
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    // target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}


const Header = () => {
  const classes = useStyles();
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <div className={classes.band}></div>
          <ToolBar >
            <Typography variant="h5" color="secondary" >
              <Box letterSpacing={7}>
                Benjamin Proulx-Mathers
            </Box>
            </Typography>
          </ToolBar>

        </AppBar>
      </ElevationScroll>
      <div className={classes.toolBarMargin} />
    </>
  );
}

export default Header;