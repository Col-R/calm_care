import React from 'react';
import './ServiceDetails.css';
import {Link} from 'react-router-dom';


const ServiceDetails = ({service, serviceId}) => {
    return (
        <div className="service__details">
            <div className="service__info">
                <p className="info__name">{service.name}</p>
                <p className="info__price">${service.price}</p>
                <Link to={`/service/${serviceId}`} className="info__button">
                View
                </Link>
               { /*<h4>{service.name}</h4>
    <p><strong>Price: $</strong>{service.price}</p>*/ }
            </div>
        </div>
    )
}

export default ServiceDetails;