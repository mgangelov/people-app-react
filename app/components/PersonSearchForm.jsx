import Button from 'react-bootstrap/Button';
import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

const PersonSearchForm = ({
  searchTerm,
  onChange,
  onSubmit,
  onReset
}) => (
  <Form
    id='searchForm'
    onSubmit={(event) => {
      event.preventDefault();
      onSubmit();
    }}
  >
    <Form.Group>
      <Form.Label>Search</Form.Label>
      <Form.Control
        type='text'
        onChange={(event) => onChange(event.target.value)}
        value={searchTerm}
        placeholder='Search by first or last name'
      />
    </Form.Group>
    <Button variant='primary' type='submit'>Search</Button>
    <Button
      variant='secondary'
      onClick={onReset}
    >Reset
    </Button>
  </Form>
);

PersonSearchForm.defaultProps = {
  searchTerm: '',
  onChange: () => {},
  onSubmit: () => {},
  onReset: () => {}
};

PersonSearchForm.propTypes = {
  searchTerm: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onReset: PropTypes.func
};

export default PersonSearchForm;
