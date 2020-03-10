import React from 'react';
import styles from './Tables.scss';

import {Link} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Button from '@material-ui/core/Button';

const demoContent = [
  {status: 'Booking', order: 11},
  {status: 'Event', order: 22},
];

const renderActions = status => {
  switch (status) {

    case 'Booking':
      return (
        <div className={styles.buttons}>
          <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/:id`} variant='contained' size='large' color='secondary' >Booking</Button>
        </div>
      );

    case 'Event':
      return (
        <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/event/:id`} variant='contained' size='large' color='secondary' >Event</Button>
      );

    default:
      return null;
  }
};

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>

    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Status</TableCell>
          <TableCell>Order</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell>{row.status}</TableCell>
            <TableCell>{row.order && <Button to={`${process.env.PUBLIC_URL}/tables/${row.order}`}>{row.order}</Button>}</TableCell>
            <TableCell>{renderActions(row.status)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default Tables; 