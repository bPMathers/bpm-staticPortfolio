import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Button, Grid, } from '@material-ui/core';
import Box from '@material-ui/core/Box';

// import theme from './Theme'
import CleanFace from '../../assets/Clean.jpg'
import FunnyFace from '../../assets/Funny.jpg'
import SurprisedFace from '../../assets/Surprised.jpg'
import { linkedin, github } from '../../assets/icons/devIconsSVGs'
import DevIcon from '../ui/DevIcon'

const useStyles = makeStyles(theme => ({
  imgContainer: {
  },
  faceImg: {
    borderRadius: '50%',
    width: 200,

    marginBottom: 15,
    // border: `10px solid ${theme.palette.common.bpmWhite}`,
    boxShadow: '0px 3px 8px 0 #888888'
  },
  actionButton: {
    opacity: 0.8,

    '&:hover': {
      opacity: 1,
      cursor: 'pointer'
    },
  }


}));

const Face = () => {
  const classes = useStyles()
  const [faceImg, setFaceImg] = useState(CleanFace)
  const preventDefault = (event) => event.preventDefault();

  return (
    <>
      <Box boxShadow={2} padding={3} margin={3} width={200} height={290} borderRadius={5} css={{ backgroundColor: 'white' }}>
        <Grid container direction="column" >
          <Grid container item className={classes.imgContainer}>
            <img className={classes.faceImg} alt="Benjamin 1" src={faceImg} />
          </Grid>
          <Grid container item>
            <Button onClick={() => setFaceImg(CleanFace)} color="primary">Clean</Button>
            <Button onClick={() => setFaceImg(FunnyFace)} color="primary">Fizz</Button>
            <Button onClick={() => setFaceImg(SurprisedFace)} color="primary">Help!</Button>
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Link rel="noopener noreferrer" href="https://www.linkedin.com/in/benjamin-proulx-mathers-346754114/" target="_blank"
          >
            <div className={classes.actionButton} >
              <DevIcon width={35}>{linkedin}</DevIcon>
            </div>
          </Link>
          <Link rel="noopener noreferrer" href="https://github.com/bPMathers" target="_blank"
          >
            <div className={classes.actionButton} >
              <DevIcon width={35}>{github}</DevIcon>
            </div>
          </Link>
        </Grid>
      </Box>
    </>
  );
}

export default Face;