import React from 'react';
import {Button} from 'react-bootstrap';

const ColumnHeader = ({title, image, share, handleShow=()=>{}, total=0}) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-sm-6">
                <h2 className="section-header">
                    {title}
                    <img alt="" className="header-icon" src={image}/>
                </h2>
                </div>
                <div className="col-sm-6">
                    {share &&
                        <React.Fragment>
                            <h2 style={{float: 'left'}}>Total: {total}</h2>
                            <Button style={{float: 'right'}} variant="secondary" onClick={handleShow}>
                                Share
                            </Button>
                        </React.Fragment>
                    }
                </div>
            </div>
            <hr className="my-2"/>
        </React.Fragment>
    );
};

export default ColumnHeader;
