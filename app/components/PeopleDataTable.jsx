/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import { timestampToDateString } from '../utils/dateFormatUtils';

const PeopleDataTable = ({
  peopleData
}) => {
  const tableColumns = [
    {
      dataField: 'first_name',
      text: 'First Name'
    },
    {
      dataField: 'last_name',
      text: 'Last Name'
    },
    {
      dataField: 'email',
      text: 'Email'
    },
    {
      dataField: 'date_of_birth',
      text: 'Date of Birth',
      type: 'date',
      formatter: (cell) => timestampToDateString(cell)
    },
    {
      dataField: 'industry',
      text: 'Industry'
    },
    {
      dataField: 'salary',
      text: 'Salary',
      type: 'number'
    },
    {
      dataField: 'years_of_experience',
      text: 'Years of Experience',
      type: 'number'
    }
  ];

  return (
    <BootstrapTable
      striped
      hover
      condensed
      bootstrap4
      keyField='id'
      data={peopleData}
      columns={tableColumns}
    />
  );
};

PeopleDataTable.defaultProps = {
  peopleData: []
};

PeopleDataTable.propTypes = {
  peopleData: PropTypes.arrayOf(PropTypes.object)
};

export default PeopleDataTable;
