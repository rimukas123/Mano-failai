import React from 'react';
import { Link } from 'react-router-dom';

const LaunchItem = ({ launch }) => {
  return (
    <li>
      <h2>{launch.name}</h2>
      <p>Date: {new Date(launch.date_utc).toLocaleDateString()}</p>
      <p>Rocket: {launch.rocket.name}</p>
      <Link to={`/launch/${launch.id}`}>View Details</Link>
    </li>
  );
};

export default LaunchItem;
