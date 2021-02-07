const getSortConstants = (sortType) => (sortType === 'asc' ? [1, -1] : [-1, 1]);
const integerSort = (a, b, lessThan, greaterThan) => {
  if (a < b) {
    return lessThan;
  }
  if (a > b) {
    return greaterThan;
  }
  return 0;
};

export const sortSalary = (peopleData, sortType) => {
  const [lessThan, greaterThan] = getSortConstants(sortType);
  return peopleData
    .slice()
    .sort(({ salary: salary1 }, { salary: salary2 }) => integerSort(
      salary1, salary2, lessThan, greaterThan
    ));
};

export const sortDateOfBirth = (peopleData, sortType) => {
  const [lessThan, greaterThan] = getSortConstants(sortType);
  return peopleData
    .slice()
    .sort(({ date_of_birth: dob1 }, { date_of_birth: dob2 }) => integerSort(
      dob1, dob2, lessThan, greaterThan
    ));
};

export const sortIndustry = (peopleData, sortType) => {
  const [lessThan, greaterThan] = getSortConstants(sortType);
  return peopleData
    .slice()
    .sort(({ industry: industry1 }, { industry: industry2 }) => {
      let result = null;
      if (!industry1 && !industry2) {
        result = 0;
      }
      if (!industry1) {
        result = lessThan;
      } if (!industry2) {
        result = greaterThan;
      }
      if (industry1 && industry2) {
        switch (industry1.localeCompare(industry2)) {
          case 0:
            result = 0;
            break;
          case 1:
            result = greaterThan;
            break;
          case -1:
            result = lessThan;
            break;
          default:
            break;
        }
      }
      return result;
    });
};
