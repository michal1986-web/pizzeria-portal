import React from 'react';
import styles from './Ordering.scss';
import {Link} from 'react-router-dom';

const Ordering = () => (
  <div className={styles.component}>
  <h2>Waiter view</h2>
  <div>
    <Link to={`${process.env.PUBLIC_URL}/ordering/order/new`} className="active">
      Ordering/order/new
    </Link>
  </div>
  <div>
    <Link to={`${process.env.PUBLIC_URL}/ordering/order/:id`} className="active">
      Ordering/order/:id
    </Link>
  </div>
</div>
);

export default Ordering; 