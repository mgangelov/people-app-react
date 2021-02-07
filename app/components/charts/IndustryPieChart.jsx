/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';
import {
  PieChart, Pie, Legend, Tooltip, Cell
} from 'recharts';
import useWindowSize from '../../utils/hooks/useWindowSize';

const IndustryPieChart = ({
  data,
  noItems,
  showNa
}) => {
  const { width } = useWindowSize();
  let displayedPieData = data.slice(0, noItems);
  if (!showNa) {
    displayedPieData = displayedPieData
      // eslint-disable-next-line no-unused-vars
      .filter(({ name }) => name !== 'n/a');
  }

  return (
    <PieChart
      width={width}
      height={500}
      // margin={{
      //   top: 30, right: 30, bottom: 30, left: 30
      // }}
    >
      <Pie
        dataKey='value'
        isAnimationActive={false}
        data={displayedPieData}
        cx='50%'
        cy='50%'
        outerRadius={0.1 * width}
        label
      >
        {
          displayedPieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={randomColor()} />
          ))
        }
      </Pie>
      <Tooltip />
      <Legend verticalAlign='bottom' height={36} />
    </PieChart>
  );
};

IndustryPieChart.defaultProps = {
  data: [],
  noItems: 0,
  showNa: false
};

IndustryPieChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  noItems: PropTypes.number,
  showNa: PropTypes.bool
};

export default IndustryPieChart;
