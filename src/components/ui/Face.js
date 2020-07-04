import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, } from '@material-ui/core';
import Box from '@material-ui/core/Box';

// import theme from './Theme'
import CleanFace from '../../assets/Clean.jpg'
import FunnyFace from '../../assets/Funny.jpg'
import SurprisedFace from '../../assets/Surprised.jpg'

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


}));

const Face = () => {
  const classes = useStyles()

  const [faceImg, setFaceImg] = useState(CleanFace)

  return (
    <>
      <Box boxShadow={2} padding={3} margin={3} width={200} borderRadius={5} css={{ backgroundColor: 'white' }}>
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
      </Box>
    </>
  );
}

export default Face;