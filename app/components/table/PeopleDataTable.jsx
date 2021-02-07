/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { sortIndustry, sortSalary, sortDateOfBirth } from '../../utils/sortUtils';
import PersonSearchForm from './PersonSearchForm';
import { getSearchResults } from '../../utils/searchUtils';
import DataTable from './DataTable';

const PeopleDataTable = ({
  peopleData
}) => {
  const [salarySort, setSalarySort] = useState(null);
  const [industrySort, setIndustrySort] = useState(null);
  const [dateOfBirthSort, setDateOfBirthSort] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [processedPeopleData, setProcessedPeopleData] = useState([]);
  const handleSalarySort = () => {
    if (salarySort) {
      setSalarySort(salarySort === 'asc' ? 'desc' : 'asc');
    } else {
      setSalarySort('asc');
    }
  };

  const handleDateOfBirthSort = () => {
    if (dateOfBirthSort) {
      setDateOfBirthSort(dateOfBirthSort === 'asc' ? 'desc' : 'asc');
    } else {
      setDateOfBirthSort('asc');
    }
  };

  const handleIndustrySort = () => {
    if (industrySort) {
      setIndustrySort(industrySort === 'asc' ? 'desc' : 'asc');
    } else {
      setIndustrySort('asc');
    }
  };

  const handleSearchSubmit = () => {
    if (searchTerm) {
      setSearchResults(getSearchResults(
        searchTerm,
        processedPeopleData
      ));
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchReset = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  // When parent component loads new data into table, load it into component
  // state and apply selected sorting to it.
  useEffect(() => {
    if (peopleData) {
      setProcessedPeopleData(peopleData);
    }
  }, [peopleData]);

  useEffect(() => {
    if (salarySort) {
      setProcessedPeopleData(sortSalary(processedPeopleData, salarySort));
    }
  }, [salarySort]);

  useEffect(() => {
    if (industrySort) {
      setProcessedPeopleData(sortIndustry(processedPeopleData, industrySort));
    }
  }, [industrySort]);

  useEffect(() => {
    if (dateOfBirthSort) {
      setProcessedPeopleData(sortDateOfBirth(
        processedPeopleData, dateOfBirthSort
      ));
    }
  }, [dateOfBirthSort]);

  return (
    <div>
      <PersonSearchForm
        searchTerm={searchTerm}
        onChange={setSearchTerm}
        onSubmit={handleSearchSubmit}
        onReset={handleSearchReset}
      />
      <DataTable
        data={searchResults && searchResults.length
          ? searchResults
          : processedPeopleData}
        handleDateOfBirthSort={handleDateOfBirthSort}
        handleIndustrySort={handleIndustrySort}
        handleSalarySort={handleSalarySort}
      />
    </div>
  );
};

PeopleDataTable.defaultProps = {
  peopleData: []
};

PeopleDataTable.propTypes = {
  peopleData: PropTypes.arrayOf(PropTypes.object)
};

export default PeopleDataTable;
