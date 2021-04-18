import React, { useEffect, useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import ControlServices from './ControlServices';

const ManageServices = () => {
    const [controlServices, setControlServices] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-peak-27727.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setControlServices(data))
    }, [])
    return (
        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                    <div>
                        <h3>Manage Services</h3>
                    </div>
                    <div>
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                            <th className="text-secondary" scope="col">Service Name</th>
                            <th className="text-secondary" scope="col">Description</th>
                            <th className="text-secondary" scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                controlServices.map(controlService =><ControlServices controlService={controlService}></ControlServices>)
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageServices;