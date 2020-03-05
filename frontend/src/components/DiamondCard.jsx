import React from 'react';
import {useDrag} from 'react-dnd';
import ItemTypes from '../services/ItemTypes';
import deleteImage from '../design/images/delete.png';
import {makeAction} from '../redux/actions/makeAction';
import {REMOVE_DIAMOND} from '../redux/actions/actionTypes';
import {connect} from 'react-redux';

const DiamondCard = ({key, obj, removeDiamond, quantity}) => {
    const [{isDragging}, drag] = useDrag({
        item: {type: ItemTypes.CARD, diamond: {...obj, quantity: 1}},
        canDrag: !obj.quantity,
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <React.Fragment>
            <div ref={drag} key={key} className="card"
                 style={{maxWidth: '8rem', backgroundColor: isDragging ? '#d3d3d3' : 'white'}}>
                <div className={`card-header ${quantity && 'delete-wrapper'}`}>{obj.type} <span className="quantity">{quantity ? `x${quantity}` : ''}</span>
                    {quantity && <img alt="" className="delete-icon" src={deleteImage} onClick={() => removeDiamond(obj)}/>}
                </div>
                <img alt="" className="card-img rounded mx-auto"
                     style={{maxWidth: '7rem', maxHeight: '7rem'}} src={obj.shape}/>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    removeDiamond: makeAction(REMOVE_DIAMOND),
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DiamondCard);
