import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid } from '@material-ui/core'

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
  const classes = useStyles()
  const theme = useTheme()
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"))
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <div className={classes.band}></div>
          <ToolBar>
            <Grid container justify="center">

              <Typography variant={matchesXs ? "body1" : matchesSm ? "h6" : "h5"} color="secondary">
                <Box letterSpacing={7}  >
                  Benjamin Proulx-Mathers
            </Box>
              </Typography>
            </Grid>
          </ToolBar>

        </AppBar>
      </ElevationScroll>
      <div className={classes.toolBarMargin} />
    </>
  );
}

export default Header;