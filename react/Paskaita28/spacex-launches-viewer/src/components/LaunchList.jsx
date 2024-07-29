import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LaunchItem from './LaunchItem';
import LaunchItemPagination from './LaunchItemPagination';
import PageSizeDropdown from './PageSizeDropdown';

const LaunchList = () => {
  const [launches, setLaunches] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalLaunches, setTotalLaunches] = useState(0);

  useEffect(() => {
    const fetchLaunches = async () => {
      const response = await axios.post('https://api.spacexdata.com/v5/launches/query', {
        options: {
          limit: pageSize,
          skip: (page - 1) * pageSize
        }
      });
      setLaunches(response.data.docs);
      setTotalLaunches(response.data.totalDocs);
    };

    fetchLaunches();
  }, [page, pageSize]);

  return (
    <div>
      <h1>SpaceX Launches</h1>
      <PageSizeDropdown pageSize={pageSize} setPageSize={setPageSize} />
      <ul>
        {launches.map((launch) => (
          <LaunchItem key={launch.id} launch={launch} />
        ))}
      </ul>
      <LaunchItemPagination
        page={page}
        setPage={setPage}
        totalLaunches={totalLaunches}
        pageSize={pageSize}
      />
    </div>
  );
};

export default LaunchList;
