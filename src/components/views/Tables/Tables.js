import React from 'react';
import styles from './Tables.scss';
import {Link} from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`} className="active">
        Tables/booking/:id
      </Link>
      </div>
      <div>
      <Link to={`${process.env.PUBLIC_URL}/tables/event/:id`} className="active">
        Tables/event/:id
      </Link>
    </div>
  </div>
);

export default Tables; 
