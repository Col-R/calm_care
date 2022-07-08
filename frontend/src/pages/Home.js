import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Home.css'

//components
import ServiceDetails from '../components/ServiceDetails';

const Home = () => {
  const [services, setServices] = useState(null)

  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch('/api/service/services') /* TODO: Install CORS package to avoid this hacky workaround. See frontend/package.json */
      const json = await response.json()

      if (response.ok) {
        setServices(json)
      } else {
        console.log('response not ok')
      }
    }

    fetchServices()
  }, [])

    return (
    <div className="homepage">
      <h2 className = "homescreen__title">Services</h2>
        <div className="homescreen__services">
        {services && services.map((service) => (
          // <p key={service._id}>{service.name}</p>
          <ServiceDetails 
          key={service._id} 
          serviceId = {service._id}
          service = {service} 
          />
        ))}
        </div>
    </div>
    )
}
  
export default Home;