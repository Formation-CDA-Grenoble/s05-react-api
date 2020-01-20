import React from 'react';
import { Selector } from './components';
import ListContainer from './containers/ListContainer';

const App = () => {
  return (
    <div>
      <ListContainer
        type="planet"
      />
    </div>
  );
}

export default App;
