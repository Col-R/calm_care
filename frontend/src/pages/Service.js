import './Service.css'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

//components

//Actions

// ToDo: use 
  // useEffect(() => {
  //   const fetchServices = async () => {
  //     const response = await fetch('/api/service/services/:id')
// to get one by id, where id is gathered from useParams().
// just like how it is done in Home.js page

const Service = (props) => {
  const {id}  = useParams();
  const [details, setDetails] = useState({})

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/service/services/" + id)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
  }, [props.id])

  return (
    <div>
      Display {details.id}
    </div>
  )
}

export default Service;