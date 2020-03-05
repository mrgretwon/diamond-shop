import {createSelector} from 'reselect';
import {getDiamondsFromCart} from './stateSelector';

export const getTotalDiamonds =  createSelector(
    getDiamondsFromCart,
    diamonds => diamonds.reduce((sum, obj) => sum + obj.quantity, 0)
);
