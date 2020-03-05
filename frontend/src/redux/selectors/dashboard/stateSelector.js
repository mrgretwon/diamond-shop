import {createSelector} from 'reselect';

export const getDashboardSelector = (state) => state.dashboard;

export const getDiamondsSelector =  createSelector(
    getDashboardSelector,
    dashboard => dashboard.diamonds
);

export const getDiamondsFromCart =  createSelector(
    getDashboardSelector,
    dashboard => dashboard.diamondsFromCart
);
