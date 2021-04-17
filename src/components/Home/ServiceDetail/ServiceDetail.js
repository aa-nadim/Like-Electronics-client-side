import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = (props) => {
    const {_id,serviceTitle,description,imageURL} = props.service;
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '50px'}} src={imageURL} alt="" />
            <h5 className="mt-3 mb-3">{serviceTitle}</h5>
            <p className="text-secondary">{description}</p>
            <button><Link to="/book" className="text-secondary">Book now</Link></button>
        </div>
    );
};

export default ServiceDetail;