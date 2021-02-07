import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMaxPage } from '../actions/paginationActions';
import { fetchPeopleData } from '../actions/peopleDataActions';
import LoadingSpinner from './LoadingSpinner';
import Pagination from './Pagination';
import PeopleDataTable from './PeopleDataTable';

const JSON_DATA_FILE = 'MOCK_DATA.json';

const TablePage = () => {
  const dispatch = useDispatch();
  const peopleData = useSelector((state) => state.peopleData.data);
  const peopleDataLoadingStatus = useSelector(
    (state) => state.peopleData.dataLoadingStatus
  );
  const currentPageData = useSelector(
    (state) => state.pagination.currentPageData
  );
  const currentPageDataLoadingStatus = useSelector(
    (state) => state.pagination.currentPageDataLoadingStatus
  );

  useEffect(() => {
    // If we haven't already loaded data into store
    if (peopleData.length === 0) {
      dispatch(fetchPeopleData(JSON_DATA_FILE));
    } else {
      dispatch(setMaxPage(peopleData.length));
    }
  }, [peopleData]);

  return (
    <div>
      <div>This is table page</div>
      <Pagination />
      <LoadingSpinner
        status={peopleDataLoadingStatus}
        pendingMessage='Data is being loaded from JSON file.'
        fulfilledMessage='Data loaded from JSON file.'
      />
      <LoadingSpinner
        status={currentPageDataLoadingStatus}
        pendingMessage='Data is being loaded into current page.'
        fulfilledMessage='Data loaded into current page.'
      />
      {
        peopleDataLoadingStatus === 'fulfilled'
          && (
            <PeopleDataTable
              peopleData={currentPageData}
            />
          )
      }
    </div>
  );
};

export default TablePage;
