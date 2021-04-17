import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const ManageServices = () => {
    return (
        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                    <h3>Manage Services</h3>
                </div>
            </div>
        </section>
    );
};

export default ManageServices;