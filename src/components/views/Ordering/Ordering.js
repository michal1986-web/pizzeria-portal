import React from 'react';
import styles from './Ordering.scss';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import {Link} from 'react-router-dom';

const demoContent = [
  {status: 'New', order: 11},
  {status: 'Ordered', order: 22},
  {status: 'Ready', order: 33},
  {status: 'Done', order: 44},
  {status: 'Cancelled', order: 55},
];

const renderActions = status => {
  switch (status) {

    case 'New':
      return (
        <div className={styles.buttons}>
          <Button component={Link} variant="contained" color="secondary" to={`${process.env.PUBLIC_URL}/ordering/order/new`}>
            New order
          </Button>
        </div>
      );

    case 'Ordered':
      return (
        <Button component={Link} variant="contained" color="secondary" to={`${process.env.PUBLIC_URL}/ordering/order/:id`}>
          Ordered
        </Button>
      );

    case 'Ready':
      return (
        <Button component={Link} variant="contained" color="secondary" to={`${process.env.PUBLIC_URL}/ordering/order/ready`}>
          Ready
        </Button>
      );

    case 'Done':
      return (
        <Button component={Link} variant="contained" color="secondary" to={`${process.env.PUBLIC_URL}/ordering/order/done`}>
          Done
        </Button>
      );

    case 'Cancelled':
      return (
        <Button component={Link} variant="contained" color="secondary" to={`${process.env.PUBLIC_URL}/ordering/order/cancelled`}>
          Cancelled
        </Button>
      );

    default:
      return null;
  }
};

const Ordering = () => (
  <div className={styles.component}>
    <h2>Waiter view</h2>

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
            <TableCell>{row.order && <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>{row.order}</Button>}</TableCell>
            <TableCell>{renderActions(row.status)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default Ordering; 