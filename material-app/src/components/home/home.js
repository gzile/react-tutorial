import React, { useEffect, useState } from "react";
import axios from "axios";
import { CountriesWrapper } from "./countries/countriesWrapper";
import { Box } from "@mui/material";

const URL = 'https://restcountries.com/v2/all';

export const Home = () => {
  const [countries, setCountries] = useState([]);

  const getAllCountries = async () => {
    
    const response = await axios.get(URL);
    const data =  await response.data;
    setCountries(data);
  }

  useEffect(()=> {
    getAllCountries();
  },[])

  return(
    <Box sx={{height: '100%'}}>
      <h2>Home page</h2>
      <CountriesWrapper countriesData={countries}/>
    </Box>

  )
}
