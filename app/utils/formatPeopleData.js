import { dateToIso8601String } from './dateFormatUtils';

const parseDateString = (dateString) => {
  const iso8601DateString = dateToIso8601String(dateString);
  return new Date(iso8601DateString).getTime();
};

export default ({
  date_of_birth,
  salary,
  years_of_experience,
  ...rest
}) => ({
  date_of_birth: parseDateString(date_of_birth),
  salary: salary ? parseFloat(salary) : 0,
  years_of_experience: years_of_experience ? parseFloat(years_of_experience) : 0,
  ...rest
});
