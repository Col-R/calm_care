import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className="service-details">
            <h4>{service.name}</h4>
            <p><strong>Price: $</strong>{service.price}</p>
        </div>
    )
}

export default ServiceDetails;