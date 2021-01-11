import React from 'react';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header title='Homepage'>
        <p>Test child</p>
      </Header>
      <Header title='Projects' />
    </>
  );
};

export default App;
