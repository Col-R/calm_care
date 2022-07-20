import React from 'react';
import './ServiceDetails.css';
import {Link} from 'react-router-dom';


const ServiceDetails = ({imageUrl, name, price, serviceId}) => {
    return (
        <div className="service__details">
        <img className = "service__image"
        src={imageUrl}
        alt={name}
        />
            <div className="service__info">
                <p className="info__name">{name}</p>
                <p className="info__price">${price}</p>
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