import React from 'react';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.scss';

const PageNav = () => {
  return (
    <nav className={styles.component}>
      <Button variant='contained' size='large' color='secondary' component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName="active">
      Homepage
      </Button>
      <Button variant='contained' size='large' color='secondary' component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName="active">
        Login
      </Button>
      <Button variant='contained' size='large' color='secondary' component={NavLink} to={`${process.env.PUBLIC_URL}/tables`} activeClassName="active">
        Tables
      </Button>
      <Button variant='contained' size='large' color='secondary' component={NavLink} to={`${process.env.PUBLIC_URL}/ordering`} activeClassName="active">
        Waiter
      </Button>
      <Button variant='contained' size='large' color='secondary' component={NavLink} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName="active">
        Kitchen
      </Button>
    </nav>
  );
};

export default PageNav; 


