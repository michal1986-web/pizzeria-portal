import React from 'react';
import styles from './Tables.scss';
import {Link} from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>

    <Grid container direction="row" justify="center" alignItems="stretch">

      <div style={{ padding: 10 }}>
        <Grid>
          <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/:id`} className="active" variant='contained' size='large' color='secondary' >Booking</Button>
        </Grid>
      </div>
      
      <div style={{ padding: 10 }}>
        <Grid>
          <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/event/:id`} className="active" variant='contained' size='large' color='secondary' >Event</Button>
        </Grid>
      </div>

    </Grid>
  </div>
);

export default Tables; 
