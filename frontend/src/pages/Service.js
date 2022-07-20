import './Service.css'

import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

//components

//Actions

// ToDo: use 
  // useEffect(() => {
  //   const fetchServices = async () => {
  //     const response = await fetch('/api/service/services/:id')
// to get one by id, where id is gathered from useParams().
// just like how it is done in Home.js page

const Service = () => {
  const {id}  = useParams();
  const [detailService, setDetailService] = useState(null)

  useEffect(() => {
    const fetchOneService = async () => {
      const response = await fetch (`/api/service/services/${id}`)
      console.log(response)
      const json = await response.json()

      if (response.ok){
        setDetailService(json)
      } else {
        console.log('response not ok' + detailService)
      }
    }
    fetchOneService()
  }, [])

  return (
    <div>
      Display {id}
    </div>
  )
}

export default Service;