import React from 'react';
import { ThemeProvider } from '@material-ui/styles'

import theme from './ui/Theme'
import Header from '../components/ui/Header'
import Face from '../components/ui/Face'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 20, backgroundColor: theme.palette.common.bpmWhite, minHeight: 1000 }}>
        <Header />
        <Face />
      </div>
    </ThemeProvider>
  );
}

export default App;
