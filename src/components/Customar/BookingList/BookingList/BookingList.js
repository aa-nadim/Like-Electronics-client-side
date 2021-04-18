import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../../../Shared/Sidebar/Sidebar';


const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookingLists, setBookingLists] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-peak-27727.herokuapp.com/bookingLists', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({ email: loggedInUser.email })
        })
        .then( res => res.json())
        .then(data => {
            console.log(data);
            setBookingLists(data);
        })
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