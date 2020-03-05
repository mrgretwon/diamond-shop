import React, {useEffect, useState} from 'react';
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
import ShareModal from './ShareModal';
import {getTotalDiamonds} from '../redux/selectors/dashboard/dashboard';

const Dashboard = ({diamonds, diamondsFromCart, addDiamond, saveCart, cartChanged, cartId, total}) => {

    const [{isOver}, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item) => addDiamond(item.diamond),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    });

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if(cartChanged){
            saveCart({id: cartId, data: diamondsFromCart});
        }
    }, [cartId, cartChanged, saveCart, diamondsFromCart]);

    return (
        <React.Fragment>
            <Header/>
            <div className="container">
                <ShareModal show={show} handleClose={handleClose} handleShow={handleShow}/>
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
                        <ColumnHeader title={"Cart"} image={cartImage} share={true} handleShow={handleShow} total={total}/>
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
    total: getTotalDiamonds(state),
    cartChanged: state.dashboard.cartChanged,
    cartId: state.dashboard.cartId
});

const mapDispatchToProps = {
    addDiamond: makeAction(ADD_DIAMOND),
    saveCart: makeAction(SAVE_CART),
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard);
