import React from 'react';

const ContactPage = () => {
    return (
        <div style={{backgroundImage: `url("../../../Images/bg.jpg")`}} className="contact-box ">
            <form action="/" className="d-flex flex-column align-items-center justify-content-center" action="https://formsubmit.co/nadim.ice.nstu@gmail.com" method="POST">
            <h1>Contact us</h1>
                        <div className="">
                            <label htmlFor="name" >Enter your name*</label><br />
                            <input style={{width:"500px"}} type="text" name="name" required />
                        </div>
                        <div className="">
                            <label htmlFor="email"  >Enter your email*</label><br />
                            <input style={{width:"500px"}} type="email" name="email" required />
                        </div>
                        <div className="">
                            <label htmlFor="subject"  >Enter your subject</label><br />
                            <input style={{width:"500px"}} type="text" name="subject" required />
                        </div>
                        <div className="">
                            <label htmlFor="text-area">Enter your Message*</label><br />
                            <input style={{width:"500px",height:"300px"}} type="text" name="textarea" required ></input>
                        </div>
                        <div className="pt-3">
                            <button className="btn btn-success" type="submit">Send Email</button>
                        </div>
            </form>
        </div>
    );
};

export default ContactPage;
