import React, { useEffect, useState } from 'react';
import Sidebar from '../../../Shared/Sidebar/Sidebar';


const BookingList = () => {
    const [bookingLists, setBookingLists] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bookingLists')
        .then(res => res.json())
        .then(data => setBookingLists(data))
    }, [])
    return (
        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                    <h3>Service List</h3>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Email</th>
                        <th className="text-secondary" scope="col">Service Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        bookingLists.map( bookingList => 
                                
                            <tr>
                                <td>{bookingList.name}</td>
                                <td>{bookingList.email}</td>
                                <td>{bookingList.serviceName}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
            </div>
        </section>
    );
};

export default BookingList;