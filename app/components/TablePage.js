import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeopleData } from '../actions/peopleDataActions';
import PeopleDataTable from './PeopleDataTable';

const JSON_DATA_FILE = 'MOCK_DATA.json';

const TablePage = () => {
  const dispatch = useDispatch();
  const peopleData = useSelector((state) => state.peopleData.data);
  const peopleDataLoadingStatus = useSelector(
    (state) => state.peopleData.dataLoadingStatus
  );

  useEffect(() => {
    // If we haven't already loaded data into store
    if (peopleData.length === 0) {
      dispatch(fetchPeopleData(JSON_DATA_FILE));
    }
  }, [peopleData]);

  return (
    <div>
      <div>This is table page</div>
      {
        peopleDataLoadingStatus === 'fulfilled'
          ? (
            <PeopleDataTable
              peopleData={peopleData}
            />
          )
          : <div>Data is loading</div>
      }
    </div>
  );
};

export default TablePage;
