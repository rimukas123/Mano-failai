import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const LaunchDetails = () => {
  const { id } = useParams();
  const [launch, setLaunch] = useState(null);

  useEffect(() => {
    const fetchLaunch = async () => {
      const response = await axios.get(`https://api.spacexdata.com/v5/launches/${id}`);
      setLaunch(response.data);
    };

    fetchLaunch();
  }, [id]);

  if (!launch) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{launch.name}</h1>
      <p>Date: {new Date(launch.date_utc).toLocaleDateString()}</p>
      <p>Rocket: {launch.rocket.name}</p>
      <p>Details: {launch.details}</p>
    </div>
  );
};

export default LaunchDetails;
