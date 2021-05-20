import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://aqueous-peak-27727.herokuapp.com/reviews`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase">Testimonial</h5>
                   <h1>What Our Customer <br/> Says </h1>
               </div>
               <div className="d-flex justify-content-center">
                    <div className="w-75 row mt-5 pt-5">
                        {
                            reviews.map(review => <Testimonial review={review} key={review.name}/>)
                        }
                    </div>
                </div>    
           </div>
       </section>
    );
};

export default Testimonials;