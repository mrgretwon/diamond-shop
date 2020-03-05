import React from 'react';
import {Route, Switch} from 'react-router';
import * as paths from './paths';

// PAGES
import DashboardPage from '../containers/DashboardPage';
import NotFoundPage from '../containers/NotFoundPage';

const routes = (
        <Switch>
            <Route exact path={paths.DASHBOARD_PAGE} render={() => <DashboardPage/>}/>
            <Route render={() => <NotFoundPage/>}/>
        </Switch>
);

export default routes;
