import React from 'react';
import styles from './Ordering.scss';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const Ordering = () => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    
    <Grid container direction="row" justify="center" alignItems="stretch">

      <div style={{ padding: 10 }}>
        <Grid>
          <Button className="active" component={Link} to={`${process.env.PUBLIC_URL}/ordering/order/new`} variant='contained' size='large' color='secondary' >New Order</Button>
        </Grid>
      </div>
      
      <div style={{ padding: 10 }}>
        <Grid>
          <Button className="active" component={Link} to={`${process.env.PUBLIC_URL}/ordering/order/:id`} variant='contained' size='large' color='secondary' >Number Order</Button>
        </Grid>
      </div>

    </Grid>
  </div>

  
);

export default Ordering; 