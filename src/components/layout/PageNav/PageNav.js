import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.scss';

import Button from '@material-ui/core/Button';

const PageNav = () => {
  return (
    <nav className={styles.component}>
      <div style={{ padding: 10 }}>
        <Button variant='contained' size='large' color='secondary' component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName="active">
          Homepage
        </Button>
      </div>
      <div style={{ padding: 10 }}>
        <Button variant='contained' size='large' color='secondary' component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName="active">
          Login
        </Button>
      </div>
      <div style={{ padding: 10 }}>
        <Button variant='contained' size='large' color='secondary' component={NavLink} to={`${process.env.PUBLIC_URL}/tables`} activeClassName="active">
          Tables
        </Button>
      </div>
      <div style={{ padding: 10 }}>
        <Button variant='contained' size='large' color='secondary' component={NavLink} to={`${process.env.PUBLIC_URL}/ordering`} activeClassName="active">
          Waiter
        </Button>
      </div>
      <div style={{ padding: 10 }}>
        <Button variant='contained' size='large' color='secondary' component={NavLink} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName="active">
          Kitchen
        </Button>
      </div>
    </nav>
  );
};

export default PageNav; 


