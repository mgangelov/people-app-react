import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setCurrentPageData, setResultsPerPage } from '../../actions/paginationActions';

const Pagination = () => {
  const dispatch = useDispatch();
  const resultsPerPage = useSelector(
    (state) => state.pagination.resultsPerPage
  );
  const currentPage = useSelector(
    (state) => state.pagination.currentPage
  );
  const maxPage = useSelector(
    (state) => state.pagination.maxPage
  );

  useEffect(() => {
    if (resultsPerPage && currentPage && maxPage) {
      dispatch(setCurrentPageData());
    }
  }, [resultsPerPage, currentPage, maxPage]);

  return (
    <div id='pagination'>
      <div id='paginationInfo'>
        <p>Results per page: {resultsPerPage}</p>
        <p>Current page: {currentPage}</p>
        <p>Max page: {maxPage}</p>
      </div>
      <ButtonGroup id='pageControls'>
        <Button
          disabled={currentPage === 0}
          onClick={() => dispatch(setCurrentPage(currentPage - 1))}
          variant='outline-primary'
        >
          Previous Page
        </Button>
        <Button
          disabled={currentPage === maxPage}
          onClick={() => dispatch(setCurrentPage(currentPage + 1))}
          variant='outline-primary'
        >
          Next Page
        </Button>
      </ButtonGroup>
      <DropdownButton title='Results per Page'>
        <Dropdown.Item onClick={() => dispatch(setResultsPerPage(15))}>
          15
        </Dropdown.Item>
        <Dropdown.Item onClick={() => dispatch(setResultsPerPage(20))}>
          20
        </Dropdown.Item>
        <Dropdown.Item onClick={() => dispatch(setResultsPerPage(25))}>
          25
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default Pagination;
