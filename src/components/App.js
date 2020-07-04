import React from 'react';
import { ThemeProvider } from '@material-ui/styles'

import theme from './ui/Theme'
import Header from '../components/ui/Header'
import Face from '../components/ui/Face'
import ProjectCard from './projects/ProjectCard'


function App() {


  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 20, backgroundColor: theme.palette.common.bpmWhite, minHeight: 1000 }}>
        <Header />
        <Face />
        <ProjectCard />
      </div>
    </ThemeProvider>
  );
}

export default App;
