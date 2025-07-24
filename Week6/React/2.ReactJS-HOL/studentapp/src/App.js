import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <Home />
        <About />
        <Contact />
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    paddingTop: '40px',           // space from top
    display: 'flex',
    justifyContent: 'center',     // center horizontally
  },
  container: {
    textAlign: 'center',
    lineHeight: '2.5',            // spacing between lines
  }
};

export default App;
