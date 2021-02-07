import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ToggleButton from 'react-bootstrap/ToggleButton';

import { fetchPeopleData } from '../actions/peopleDataActions';
import { formatPieData, formatScatterData } from '../utils/formatChartData';
import SalaryScatterChart from './charts/SalaryScatterChart';
import LoadingSpinner from './common/LoadingSpinner';
import IndustryPieChart from './charts/IndustryPieChart';

const JSON_DATA_FILE = 'MOCK_DATA.json';

const ChartsPage = () => {
  const dispatch = useDispatch();
  const peopleData = useSelector((state) => state.peopleData.data);
  const peopleDataLoadingStatus = useSelector(
    (state) => state.peopleData.dataLoadingStatus
  );

  const [scatterChartData, setScatterChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  const [
    scatterChartShowExperienceData, setScatterChartShowExperienceData
  ] = useState(true);
  const [
    scatterChartShowDateOfBirthData, setScatterChartShowDateOfBirthData
  ] = useState(true);

  useEffect(() => {
    // If we haven't already loaded data into store
    if (peopleData.length === 0) {
      dispatch(fetchPeopleData(JSON_DATA_FILE));
    } else {
      setScatterChartData(formatScatterData(peopleData));
      setPieChartData(formatPieData(peopleData));
    }
  }, [peopleData]);

  return (
    <div>
      <div>This is charts page</div>
      <LoadingSpinner
        status={peopleDataLoadingStatus}
        pendingMessage='Data is being loaded from JSON file.'
        fulfilledMessage='Data loaded from JSON file.'
      />
      <div id='charts'>
        {
          scatterChartData && scatterChartData.length
          && (
          <div id='salaryScatterChart'>
            <h1>Salary Scatter Chart</h1>
            <sub>
              Shows dispersion of salaries in relation to date of birth and
              years of experience
            </sub>
            <SalaryScatterChart
              data={scatterChartData}
              showExperienceData={scatterChartShowExperienceData}
              showDateOfBirthData={scatterChartShowDateOfBirthData}
            />
            <div id='salaryScatterChartControls'>
              <ToggleButton
                type='checkbox'
                checked={scatterChartShowExperienceData}
                value={scatterChartShowExperienceData}
                variant='primary'
                onChange={
                  () => setScatterChartShowExperienceData(
                    !scatterChartShowExperienceData
                  )
                }
              >
                Years of Experience Data
              </ToggleButton>
              <ToggleButton
                type='checkbox'
                variant='secondary'
                checked={scatterChartShowDateOfBirthData}
                value={scatterChartShowDateOfBirthData}
                onChange={
                  () => setScatterChartShowDateOfBirthData(
                    !scatterChartShowDateOfBirthData
                  )
                }
              >
                Date of Birth Data
              </ToggleButton>
            </div>
          </div>
          )
        }
        {
          pieChartData && pieChartData.length
          && (
            <div id='industryPieChart'>
              <h1>Industry Pie Chart</h1>
              <sub>Top 10 industries represented in the data</sub>
              <IndustryPieChart
                data={pieChartData}
                noItems={10}
                showNa={false}
              />
            </div>
          )
        }
      </div>
    </div>
  );
};

export default ChartsPage;
