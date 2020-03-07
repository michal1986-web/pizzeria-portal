import React from 'react';
import styles from './Ordering.scss';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Ordering = () => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <div>
      <Button variant='contained' size='large' color='secondary' className={styles.link} component={Link} to={`${process.env.PUBLIC_URL}/ordering/order/new`} className="active">
        Ordering/order/new
      </Button>
    </div>
    <div>
      <Button variant='contained' size='large' color='secondary' className={styles.link} component={Link} to={`${process.env.PUBLIC_URL}/ordering/order/:id`} className="active">
        Ordering/order/:id
      </Button>
    </div>
  </div>
);

export default Ordering; 