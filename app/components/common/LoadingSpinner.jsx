import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = ({
  status,
  pendingMessage,
  fulfilledMessage
}) => {
  const [message, setMessage] = useState(
    status === 'pending'
      ? pendingMessage
      : fulfilledMessage
  );

  useEffect(() => {
    setMessage(
      status === 'pending'
        ? pendingMessage
        : fulfilledMessage
    );
  }, [status]);

  return (
    <div id='loadingSpinner'>
      {status === 'pending' && <Spinner animation='grow' />}
      <div>{message}</div>
    </div>
  );
};

LoadingSpinner.defaultProps = {
  status: 'default',
  pendingMessage: 'Default pending message',
  fulfilledMessage: 'Default fulfilled message',
};

LoadingSpinner.propTypes = {
  status: PropTypes.string,
  pendingMessage: PropTypes.string,
  fulfilledMessage: PropTypes.string
};

export default LoadingSpinner;
