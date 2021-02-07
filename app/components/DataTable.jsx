import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import { timestampToDateString } from '../utils/dateFormatUtils';

const DataTable = ({
  data,
  handleDateOfBirthSort,
  handleIndustrySort,
  handleSalarySort
}) => {
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
        {data.map(({
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
        ))}
      </tbody>
    </Table>
  );
};

DataTable.defaultProps = {
  data: [],
  handleDateOfBirthSort: () => {},
  handleIndustrySort: () => {},
  handleSalarySort: () => {}
};

DataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  handleDateOfBirthSort: PropTypes.func,
  handleIndustrySort: PropTypes.func,
  handleSalarySort: PropTypes.func
};

export default DataTable;
