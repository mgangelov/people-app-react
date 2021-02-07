import React from 'react';
import PropTypes from 'prop-types';
import {
  XAxis, YAxis, CartesianGrid, Tooltip, ScatterChart, Scatter
} from 'recharts';
import useWindowSize from '../../utils/hooks/useWindowSize';

const SalaryScatterChart = ({
  data,
  showExperienceData,
  showDateOfBirthData
}) => {
  const { width } = useWindowSize();

  return (
    <ScatterChart
      width={width}
      height={400}
      margin={{
        top: 30, right: 30, bottom: 30, left: 30
      }}
    >
      <CartesianGrid />
      <XAxis type='number' dataKey='salary' name='Salary' />
      <YAxis yAxisId='left' type='number' dataKey='year' name='Date of Birth' domain={[1940, 2000]} />
      <YAxis yAxisId='right' type='number' dataKey='experience' orientation='right' name='Years of Experience' />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      {
        showDateOfBirthData
        && <Scatter yAxisId='left' name='Date of Birth' data={data} fill='#6c757d' />
      }
      {
        showExperienceData
        && <Scatter yAxisId='right' name='Years of Experience' data={data} fill='#007bff' />
      }
    </ScatterChart>
  );
};

SalaryScatterChart.defaultProps = {
  data: [],
  showExperienceData: true,
  showDateOfBirthData: true
};

SalaryScatterChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  showExperienceData: PropTypes.bool,
  showDateOfBirthData: PropTypes.bool
};

export default SalaryScatterChart;
