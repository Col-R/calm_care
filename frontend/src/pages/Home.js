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
      const response = await fetch('/api/service/services')
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
      {services && services.map((service) => (
        <p key={service._id}>{service.name}</p>
      ))}
    </div>
    )
}
  
export default Home;