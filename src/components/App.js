import React from 'react';
import { ThemeProvider } from '@material-ui/styles'

import theme from './ui/Theme'
import Header from '../components/ui/Header'
import Face from '../components/ui/Face'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ margin: 20 }}>
        <Header />
        <Face />
      </div>
    </ThemeProvider>
  );
}

export default App;
