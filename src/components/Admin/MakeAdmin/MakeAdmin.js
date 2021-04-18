import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const adminData = {
            name: data.name,
            email:data.email
        };
        const url = `https://aqueous-peak-27727.herokuapp.com/makeAdmin`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
        .then(res => console.log('server side response'))
        console.log(adminData)
    };
    return (
        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input type="text" defaultValue={loggedInUser.name} ref={register({ required: true })} name="name" placeholder="your name" className="form-control" />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <input type="text" defaultValue={loggedInUser.email} ref={register({ required: true })} name="email" placeholder="your email" className="form-control" />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;