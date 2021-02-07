/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';

const PeopleDataTable = ({
  peopleData
}) => {
  const tableHeader = (
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Date of Birth</th>
        <th>Industry</th>
        <th>Salary</th>
        <th>Years of experience</th>
      </tr>
    </thead>
  );

  return (
    <Table striped bordered hover variant='dark' size='sm'>
      {tableHeader}
      <tbody>
        {
          peopleData.map(({
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
              <td>{date_of_birth}</td>
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
