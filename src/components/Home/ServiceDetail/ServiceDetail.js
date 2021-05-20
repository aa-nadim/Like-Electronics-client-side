import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = (props) => {
    const {_id,serviceTitle,description,imageURL} = props.service;
    const bookName = serviceTitle;
    return (
        <div className="mt-3 mb-3 col-xl-4 text-center col-lg-6">
            <img style={{height: '300px',width:'350px'}} src={imageURL} alt="" />
            <h5 className="mt-3 mb-3">{serviceTitle}</h5>
            <p className="text-secondary">{description}</p>
            <button className="btn btn-success"><Link to={`/book/${bookName}`} className="text-white">Book now</Link></button>
        </div>
    );
};

export default ServiceDetail;