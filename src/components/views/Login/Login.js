import React from 'react';
import styles from './Login.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const Login = () => (
  <div className={styles.component}>
    <h2>Log in</h2>

    <form noValidate autoComplete="off">

      <TextField id="standard-basic" label="Login" />

      <TextField
        id="outlined-required"
        label="Password"
        type="password"
        autoComplete="current-password"
      />

      <Button variant="contained" color="secondary" component={Link} to={`${process.env.PUBLIC_URL}/`}>
      Log in
      </Button>

    </form>
  </div>
);

export default Login; 