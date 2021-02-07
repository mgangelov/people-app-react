import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeopleData } from '../actions/peopleDataActions';

const JSON_DATA_FILE = 'MOCK_DATA.json';

const ChartsPage = () => {
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
      <div>This is charts page</div>
      <div>
        {
          peopleDataLoadingStatus === 'fulfilled'
            ? 'Data has loaded'
            : 'Data is loading'
        }
      </div>
    </div>
  );
};

export default ChartsPage;
