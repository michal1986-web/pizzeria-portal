import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.scss';

const PageNav = () => {
  return (
    <nav className={styles.component}>
      <div>
        <NavLink className={styles.link} exact to={`${process.env.PUBLIC_URL}/`} activeClassName="active">
          Homepage
        </NavLink>
      </div>
      <div>
        <NavLink className={styles.link} to={`${process.env.PUBLIC_URL}/login`} activeClassName="active">
          Login
        </NavLink>
      </div>
      <div>
        <NavLink className={styles.link} to={`${process.env.PUBLIC_URL}/tables`} activeClassName="active">
          Tables
        </NavLink>
      </div>
      <div>
        <NavLink className={styles.link} to={`${process.env.PUBLIC_URL}/ordering`} activeClassName="active">
          Waiter
        </NavLink>
      </div>
      <div>
        <NavLink className={styles.link} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName="active">
          Kitchen
        </NavLink>
      </div>
    </nav>
  );
};

export default PageNav; 


