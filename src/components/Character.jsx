import React from 'react';

const Character = ({ name, gender, hair_color, eye_color }) =>
  <div>
    <h1>{name}</h1>
    <ul>
      <li>Gender: {gender}</li>
      <li>Hair color: {hair_color}</li>
      <li>Eye Color: {eye_color}</li>
    </ul>
  </div>
;

export default Character;
