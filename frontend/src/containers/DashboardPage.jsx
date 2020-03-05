import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Dashboard from '../components/index';
import ReactNotification from 'react-notifications-component'
import {FETCH_CART, FETCH_DIAMONDS} from '../redux/actions/actionTypes';
import {makeAction} from '../redux/actions/makeAction';

const DashboardPage = ({fetchDiamonds, fetchCart}) => {
    useEffect(() => {
        fetchDiamonds();
        fetchCart();
      }, [fetchDiamonds, fetchCart]);
    return (
        <React.Fragment>
            <ReactNotification/>
            <Dashboard/>
        </React.Fragment>
    );
};

const mapDispatchToProps = {
    fetchDiamonds: makeAction(FETCH_DIAMONDS),
    fetchCart: makeAction(FETCH_CART),
};

export default connect(
    null,
    mapDispatchToProps,
)(DashboardPage);
