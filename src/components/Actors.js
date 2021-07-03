import React from 'react';
import { actors } from '../data';

const actorList = actors.map(actor => {
  return (
    <div>
      <h1>{actor.name}</h1>
      <ul>{actor.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  )
});

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorList}
    </div>
  );
};

export default Actors;