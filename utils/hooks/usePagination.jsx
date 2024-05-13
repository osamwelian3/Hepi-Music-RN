import { useCallback, useState } from 'react';

const usePagination = ({ fetchFunction, initialPage }) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [hasMoreData, setHasMoreData] = useState(true); // New state to track if there's more data

  const handleEndReached = useCallback(async () => {
    if (hasMoreData) {
      try {
        const newData = await fetchFunction(currentPage);
        if (newData.length > 0) {
          setCurrentPage((prevPage) => prevPage + 1);
        } else {
          setHasMoreData(false); // No more data available
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }, [currentPage, fetchFunction, hasMoreData]);

  return { currentPage, handleEndReached };
};

export default usePagination;
