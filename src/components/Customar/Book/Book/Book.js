import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';
import Sidebar from '../../../Shared/Sidebar/Sidebar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './Book.css';

const Book = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [serviceName, setServiceName] = useContext(UserContext);
    const [bookingData, setBookingData] = useState(null);
    console.log(serviceName);
    const onSubmit = data => {
        setBookingData(data);
    };
    const handlePaymentSuccess = paymentId => {
        const bookDetails = { 
            serviceName:bookingData.serviceName,
            name:bookingData.name,
            email:bookingData.email,
            address:bookingData.address,
          paymentId,
          orderTime: new Date() 
        };
        fetch('http://localhost:5000/addBook', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(bookDetails)
        })
          .then(res => res.json())
          .then(data => {
            if (data) {
              alert('your order placed successfully');
            }
          })
      }

    return (
        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <h3>Book</h3>
                <div style={{display: bookingData ? 'none': 'block'}} className="col-md-6 col-sm-12 col-12 d-flex justify-content-center">
                <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="serviceName" placeholder="Service Name" className="form-control" />
                        {errors.serviceName && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" defaultValue={loggedInUser.name} ref={register({ required: true })} name="name" placeholder="your name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" defaultValue={loggedInUser.email} ref={register({ required: true })} name="email" placeholder="your email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="address" placeholder="your address" className="form-control" />
                        {errors.address && <span className="text-danger">This field is required</span>}
                    </div>
                    <input type="submit" />
                </form>
                </div>
                        <div style={{display: bookingData ? 'block': 'none'}}   className="col-md-6">
                            <h2>Please Pay for this service</h2>
                            <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                        </div>
            </div>
        </section>
    );
};

export default Book;