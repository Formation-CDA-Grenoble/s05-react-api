import React from 'react';

const Planet = ({ name, climate, terrain, population }) =>
  <div>
    <h1>{name}</h1>
    <ul>
      <li>Climate: {climate}</li>
      <li>Terrain: {terrain}</li>
      <li>Population: {population}</li>
    </ul>
  </div>
;

export default Planet;
