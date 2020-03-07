import React from 'react';
import styles from './Ordering.scss';
import PropTypes from 'prop-types';

const OrderingOrderId = ({ match }) => (
  <div className={styles.component}>
    <h2>OrderingOrderId view</h2>
    <span>{match.params.id}</span>
  </div>
);

OrderingOrderId.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }),
};

export default OrderingOrderId; 