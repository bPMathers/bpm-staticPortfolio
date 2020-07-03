import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import CleanFace from '../../assets/Clean.jpg'
import FunnyFace from '../../assets/Funny.jpg'
import SurprisedFace from '../../assets/Surprised.jpg'

const useStyles = makeStyles(theme => ({
  faceContainer: {
    // flexDirection: "column"
    width: 100,
  },
  faceImg: {
    borderRadius: '50%',
    width: 200,
    marginBottom: 5

  }

}));

const Face = () => {
  const classes = useStyles()

  const [faceImg, setFaceImg] = useState(CleanFace)

  return (
    <>
      <div className={classes.faceContainer}>
        <Box display="flex" flexDirection="column" boxShadow={3} padding={3}>
          <img className={classes.faceImg} alt="Benjamin 1" src={faceImg} />
          <Box>
            <Button onClick={() => setFaceImg(CleanFace)}>Clean</Button>
            <Button onClick={() => setFaceImg(FunnyFace)}>Fizz</Button>
            <Button onClick={() => setFaceImg(SurprisedFace)}>Help!</Button>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Face;