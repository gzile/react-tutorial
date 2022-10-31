import React, { useEffect, useState } from "react";
import axios from "axios";

const URL = 'https://restcountries.com/v2/all';

export const Home = () => {

  const [countries, setCountries] = useState([]);

  // const { name, capital, population, flag}

  const getAllCountries = async () => {
    
    const response = await axios.get(URL);
    const data =  await response.data;
    setCountries(data);
  }

  useEffect(()=> {
    getAllCountries();
  },[])


  return(
    <h1>
        Home
    </h1>
  )
}
