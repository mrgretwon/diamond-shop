import React from 'react';

const ColumnHeader = ({title, image}) => {
    return (
        <React.Fragment>
            <div className="row">
                <h2 className="section-header">
                    {title}
                    <img alt="" className="header-icon" src={image}/>
                </h2>
            </div>
            <hr className="my-2"/>
        </React.Fragment>
    );
};

export default ColumnHeader;
