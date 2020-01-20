import React from 'react';

const Film = ({ title, episode_id, director, release_date }) =>
  <div>
    <h1>{title}</h1>
    <ul>
      <li>Episode ID: {episode_id}</li>
      <li>Director: {director}</li>
      <li>Release Date: {release_date}</li>
    </ul>
  </div>
;

export default Film;
