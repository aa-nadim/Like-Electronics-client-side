import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    
    const onSubmit = data => {
        const eventData = {
            serviceTitle:data.serviceTitle,
            description:data.description,
            imageURL: imageURL
        };
        const url = `http://localhost:5000/addService`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response'))
        console.log(eventData)
    };
    const handleImageUpload = event =>{
        const imageData = new FormData();
        imageData.set('key', '57fddaeb2b4a6d4911b0c969ca3d4490');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function (response){
            console.log(response.data.data.display_url);
            setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    return (
        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="serviceTitle" placeholder="Enter title" className="form-control" />
                        {errors.serviceTitle && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="description" placeholder="Enter Description" className="form-control" />
                        {errors.description && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleImageUpload} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <input type="submit" />
                </form>
                </div>
            </div>
        </section>
    );
};

export default AddService;