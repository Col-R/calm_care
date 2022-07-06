import React from 'react';
import './Home.css'
import {useEffect, useState} from 'react';

// components


const Home = () => {

    // useEffect hook
    useEffect(() => {
        const fetchServices = async () => {
            const response = await fetch('http://localhost:3000/api/services')
            const json = await response.json()

            if (response.ok) {

            }
        }
        fetchServices()
    }, [])
    return (
        <div className="homescreen">
            <h2 className = "homescreen__title">Our Services</h2>
        </div>
    )
}

export default Home