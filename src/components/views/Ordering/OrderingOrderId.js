import React from 'react';
import styles from './Ordering.scss';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const OrderingOrderId = ({ match }) => (
  <div className={styles.component}>
    <h2>Number Order</h2>
    <Container maxWidth="sm">
      <Paper>
        <span style={{ padding: 25 }}>{match.params.id}</span>
      </Paper>
    </Container>
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