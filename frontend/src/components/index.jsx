import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getDiamondsFromCart, getDiamondsSelector} from '../redux/selectors/dashboard/stateSelector';
import cartImage from '../design/images/cart.png';
import diamondImage from '../design/images/diamond.png';
import DiamondCard from './DiamondCard';
import Header from './Header';
import ColumnHeader from './ColumnHeader';
import ItemTypes from '../services/ItemTypes';
import {makeAction} from '../redux/actions/makeAction';
import {ADD_DIAMOND, SAVE_CART} from '../redux/actions/actionTypes';
import {useDrop} from 'react-dnd';

const Dashboard = ({diamonds, diamondsFromCart, addDiamond, saveCart, cartChanged}) => {
    const [{isOver}, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item) => addDiamond(item.diamond),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    });


    useEffect(() => {
        if(cartChanged){
            saveCart(diamondsFromCart);
        }
    }, [cartChanged, saveCart, diamondsFromCart]);

    return (
        <React.Fragment>
            <Header/>
            <div className="container">
                <div className="row rounded-container">
                    <div className="col-sm-6 column-left">
                        <ColumnHeader title={"Diamonds"} image={diamondImage}/>
                        <div className="row">
                            {diamonds.map((obj, key) =>
                                <DiamondCard obj={obj} key={key}/>
                            )}
                        </div>
                    </div>
                    <div className="col-sm-6 column-right" ref={drop} style={{backgroundColor: isOver ? '#d3d3d3' : 'white'}}>
                        <ColumnHeader title={"Cart"} image={cartImage}/>
                        <div className="row">
                            {diamondsFromCart.length ?
                                diamondsFromCart.map((obj, key) => <DiamondCard obj={obj} key={key} quantity={obj.quantity}/>) :
                                <h5 className="cart-placeholder">Drag your diamonds here</h5>
                            }
                            </div>
                        </div>

                    </div>
                </div>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => ({
    diamonds: getDiamondsSelector(state),
    diamondsFromCart: getDiamondsFromCart(state),
    cartChanged: state.dashboard.cartChanged
});

const mapDispatchToProps = {
    addDiamond: makeAction(ADD_DIAMOND),
    saveCart: makeAction(SAVE_CART),
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard);
