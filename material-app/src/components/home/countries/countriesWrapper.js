import { Box } from "@mui/material";
import BasicTable from "./countryTable"
import DataGridDemo from "./dataGridCountries";

export const CountriesWrapper = ({countriesData}) => {
  return(
    <Box sx={{padding: '10px'}}>
      {/* <DataGridDemo countries={countriesData}/> */}
      <BasicTable countries={countriesData}/>
    </Box>
    
  )
}