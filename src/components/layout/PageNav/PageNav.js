import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.scss';

import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';

const accent = {
  color: 'purple'
  };

const PageNav = () => {
  return (
    <nav className={styles.component}>
      <div>
        <Button variant='contained' size='large' color={accent} className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName="active">
          Homepage
        </Button>
      </div>
      <div>
        <Button variant='contained' size='large' color='secondary' className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName="active">
          Login
        </Button>
      </div>
      <div>
        <Button variant='contained' size='large' color='primary' className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/tables`} activeClassName="active">
          Tables
        </Button>
      </div>
      <div>
        <Button variant='contained' size='large' color='primary' className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/ordering`} activeClassName="active">
          Waiter
        </Button>
      </div>
      <div>
        <Button variant='contained' size='large' color='primary' className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName="active">
          Kitchen
        </Button>
      </div>
    </nav>
  );
};

export default PageNav; 


