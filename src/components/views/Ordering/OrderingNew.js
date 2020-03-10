import React from 'react';
import styles from './Ordering.scss';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const OrderingNew = () => (
  <div className={styles.component}>
    <h2>NEW</h2>

    <Container maxWidth="sm">
      <Paper>
        <span style={{ padding: 25 }}></span>
      </Paper>
    </Container>
  </div>
);

export default OrderingNew; 