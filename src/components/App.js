import React from 'react';
import { ThemeProvider } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'

import theme from './ui/Theme'
import Header from '../components/ui/Header'
import Face from '../components/ui/Face'
import TourCuesCard from './projects/TourCuesCard'



function App() {


  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 20, backgroundColor: theme.palette.common.bpmWhite, minHeight: 1000 }}>
        <Header />
        <Grid container>
          <Face />
          <TourCuesCard />
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
