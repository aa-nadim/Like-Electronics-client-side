import React, { useEffect } from 'react';
import { useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`https://aqueous-peak-27727.herokuapp.com/services`)
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <section style={{backgroundColor:'#8FBC8F'}} className="services-container mt-5">
            <div className="text-center">
                <h3 style={{color: 'green'}}><strong>OUR SERVICES</strong></h3>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        services.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;