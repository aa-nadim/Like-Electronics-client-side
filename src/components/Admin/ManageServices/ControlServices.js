import React from 'react';

const ControlServices = ({controlService}) => {
    const deleteSeovice = id => {
        console.log(id)
        fetch(`https://aqueous-peak-27727.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log('deleted successfully',data)
            alert('This product is deleted. please check Home Page........');
        })
    }
    return (
        <tr>
                <td>{controlService.serviceTitle}</td>
                <td>{controlService.description}</td>
                <td><button onClick={() => deleteSeovice(controlService._id)}>Delete</button></td>
        </tr>
    );
};

export default ControlServices;