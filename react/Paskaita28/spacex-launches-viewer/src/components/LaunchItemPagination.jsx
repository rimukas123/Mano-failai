import React from 'react';

const LaunchItemPagination = ({ page, setPage, totalLaunches, pageSize }) => {
  const totalPages = Math.ceil(totalLaunches / pageSize);

  return (
    <div>
      <button
        onClick={() => setPage(page - 1)}
        disabled={page <= 1}
      >
        Previous
      </button>
      <span> Page {page} of {totalPages} </span>
      <button
        onClick={() => setPage(page + 1)}
        disabled={page >= totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default LaunchItemPagination;
