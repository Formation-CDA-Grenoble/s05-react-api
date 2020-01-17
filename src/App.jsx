import React from 'react';
import Axios from 'axios';

const fetchFromAPI = () => {
  Axios.get('https://swapi.co/api/films/1/')
  .then(response => console.log(response))
  ;
}

const App = () =>
  <div>
    {fetchFromAPI()}
    Bonjour Grenoble!
  </div>
;

export default App;
