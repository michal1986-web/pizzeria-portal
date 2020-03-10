import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';

import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';

import Tables from './components/views/Tables/Tables';
import TablesBookingId from './components/views/Tables/TablesBookingId';
import TablesEventId from './components/views/Tables/TablesEventId';

import Ordering from './components/views/Ordering/Ordering';
import OrderingNew from './components/views/Ordering/OrderingNew';
import OrderingOrderId from './components/views/Ordering/OrderingOrderId';

import {StylesProvider} from '@material-ui/core/styles';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';

//import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#424242',
    },
     secondary: {
       main: '#1de9b6',
    },
  }
});

function App() {
  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>

              <Route exact path={process.env.PUBLIC_URL + '/'} component={Dashboard} />
              <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
              <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />

              <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBookingId} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/event/:id'} component={TablesEventId} />

              <Route exact path={process.env.PUBLIC_URL + '/ordering'} component={Ordering} />
              <Route exact path={process.env.PUBLIC_URL + '/ordering/new'} component={OrderingNew} />
              <Route exact path={process.env.PUBLIC_URL + '/ordering/order/:id'} component={OrderingOrderId} />

            </Switch>    
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
