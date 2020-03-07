import React from 'react';
import styles from './Tables.scss';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <div>
      <Button variant='contained' size='large' color='primary' component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/:id`} className="active">
        Tables/booking/:id
      </Button>
      </div>
      <div>
      <Button variant='contained' size='large' color='primary' component={Link} to={`${process.env.PUBLIC_URL}/tables/event/:id`} className="active">
        Tables/event/:id
      </Button>
    </div>
  </div>
);

export default Tables; 
