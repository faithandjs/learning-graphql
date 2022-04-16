import React from 'react';
import Main from './components/Main'

const style = {
  height: '100%', 
  display: 'flex',
  alignItems: 'center'
}

function App() {
  return (
    <div style={style}>
      <Main/>
    </div>
  );
}

export default App;
