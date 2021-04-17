import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setReviews(data);
        })
    }, [])
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase">Testimonial</h5>
                   <h1>What Our Patients <br/> Says </h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        reviews.map(review => <Testimonial review={review} key={review.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;