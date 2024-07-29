import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to SpaceX Launches Viewer</h1>
      <Link to="/launches">View Launches</Link>
    </div>
  );
};

export default Home;
