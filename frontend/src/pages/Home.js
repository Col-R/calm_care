import React from 'react';
import './Home.css'
import {useEffect, useState} from 'react';

// components


const Home = () => {
    const [appointments, setAppointments] = useState(null)

    // useEffect hook
    useEffect(() => {
        const fetchServices = async () => {
            const response = await fetch('/api/appointments')
            const json = await response.json()
            if (response.ok) {
                setAppointments(json)
            }
        }
        fetchServices()
    }, [])

    return (
        <div className="homescreen">
            <div className="appointments">
                {appointments && appointments.map((appointment) =>  ( //only if there is a value for appointments, map through them. 
                    <p key={appointment._id}>{appointment.description}  </p>
                ))}
            </div>
        </div>
    )
}

export default Home