import React, {useEffect, useState } from 'react';
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
    <main>
      <div className = "container">
        <div className="row">
        
          <div className="homepage col-8">
            <h2 className = "homescreen__title_1">Services</h2>
            <h5 className="homescreen__subtitle">Calm Care offers a variety of premium services, all with the same goal: Getting you to your happy place.</h5>
              <div className="homescreen__services">
              {services && services.map((service) => (
                // <p key={service._id}>{service.name}</p>
                <ServiceDetails 
                key={service._id} 
                serviceId = {service._id}
                name = {service.name} 
                price = {service.price}
                imageUrl = {service.ImageUrl}
                />
              ))}
              </div>
          </div>
        </div>
      </div>
    </main>
    )
}
  
export default Home;