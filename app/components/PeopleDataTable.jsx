/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import { timestampToDateString } from '../utils/dateFormatUtils';
import { sortIndustry, sortSalary, sortDateOfBirth } from '../utils/sortUtils';

const PeopleDataTable = ({
  peopleData
}) => {
  const [salarySort, setSalarySort] = useState(null);
  const [industrySort, setIndustrySort] = useState(null);
  const [dateOfBirthSort, setDateOfBirthSort] = useState(null);

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

  const tableHeader = (
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th><a href='#' onClick={handleDateOfBirthSort}>Date of Birth</a></th>
        <th><a href='#' onClick={handleIndustrySort}>Industry</a></th>
        <th><a href='#' onClick={handleSalarySort}>Salary</a></th>
        <th>Years of experience</th>
      </tr>
    </thead>
  );

  return (
    <Table striped bordered hover variant='dark' size='sm'>
      {tableHeader}
      <tbody>
        {
          processedPeopleData.map(({
            id,
            first_name,
            last_name,
            email,
            date_of_birth,
            industry,
            salary,
            years_of_experience
          }) => (
            <tr key={id}>
              <td>{first_name}</td>
              <td>{last_name}</td>
              <td>{email}</td>
              <td>{timestampToDateString(date_of_birth)}</td>
              <td>{industry}</td>
              <td>{salary}</td>
              <td>{years_of_experience}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
};

PeopleDataTable.defaultProps = {
  peopleData: []
};

PeopleDataTable.propTypes = {
  peopleData: PropTypes.arrayOf(PropTypes.object)
};

export default PeopleDataTable;
