import React, { useContext, useEffect, useState }  from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faAddressBook, faPlus, faUsers, faListUl,faUnlock } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://aqueous-peak-27727.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data));
    }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <div>
                    <li>
                        <Link to="/" className="text-white">
                            <FontAwesomeIcon icon={faAddressBook} /> <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bookingList" className="text-white">
                            <FontAwesomeIcon icon={faListUl} /> <span>Booking List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/review" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>Review</span>
                        </Link>
                    </li>
                </div>
                {isAdmin && <div>
                    <li>
                        <Link to="/orderList" className="text-white">
                            <FontAwesomeIcon icon={faListUl} /> <span>Order List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-white" >
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" className="text-white">
                            <FontAwesomeIcon icon={faUnlock} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageServices" className="text-white" >
                            <FontAwesomeIcon icon={faCog} /> <span>Manage Services</span>
                        </Link>
                    </li>
                </div>}
            </ul>
        </div>
    );
};

export default Sidebar;