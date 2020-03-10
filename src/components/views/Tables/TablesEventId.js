import React from 'react';
import styles from './Tables.scss';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const TablesEventId = () => (
  <div className={styles.component}>
    <h2>Event</h2>

    <Container maxWidth="sm">
      <Paper>
        <span style={{ padding: 25 }}></span>
      </Paper>
    </Container>
  </div>
);

export default TablesEventId; 
