/* eslint-disable no-prototype-builtins */
import { timestampToDateString } from './dateFormatUtils';
import { integerSort } from './sortUtils';

const groupByIndustry = (peopleData) => peopleData.reduce((acc, { industry }) => {
  if (!industry) {
    return {
      ...acc,
      'n/a': acc['n/a'] ? acc['n/a'] + 1 : 1
    };
  }
  if (acc.hasOwnProperty(industry)) {
    return {
      ...acc,
      [industry]: acc[industry] + 1
    };
  }
  return {
    ...acc,
    [industry]: 1
  };
}, {});

const sortIndustryPieData = (industryPieData) => industryPieData
  .sort(({ value: value1 }, { value: value2 }) => integerSort(
    value1, value2, 1, -1
  ));

export const formatScatterData = (peopleData) => peopleData.map(({
  salary,
  date_of_birth,
  years_of_experience
}) => ({
  salary,
  experience: years_of_experience,
  year: parseInt(timestampToDateString(date_of_birth)
    .split('/')[2], 10)
}))
  .filter(({ salary }) => salary !== 0);

export const formatPieData = (peopleData) => {
  const groupedIndustryData = groupByIndustry(peopleData);
  const industryPieData = Object.entries(groupedIndustryData)
    .map(([name, value]) => ({ name, value }));
  return sortIndustryPieData(industryPieData);
};
