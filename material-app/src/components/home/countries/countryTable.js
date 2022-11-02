import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const getWord = (name) => {
  if(name){
    const arr = name.split(' ');
    const firstWord = arr && arr.length ? arr[0] : '';
    return firstWord.toLowerCase();
  }
  
}

const BasicTable = ({countries}) => {
  const [desc, setDesc] = React.useState(true);
  let countryArr = countries || [];
  
  const sortByPopulationHandler = () => {
    console.log(desc)
    if(desc){
      countries.sort((a, b) => {return a.population - b.population});
      setDesc(false);
    } else {
      countries.sort((a, b) => {return b.population - a.population});
      setDesc(true);
    }
    countryArr = countries;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{'& td': {fontWeight: 'bold'}}}>
            <StyledTableCell>
              Country name 
            </StyledTableCell>
            <StyledTableCell align="right">Capital city</StyledTableCell>
            <StyledTableCell align="right" onClick={sortByPopulationHandler}>
              Population 
              {desc ? <ArrowDownwardIcon/> : <ArrowUpwardIcon/>}
            </StyledTableCell>
            <StyledTableCell align="right">Flag</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countryArr.map((countryItem) => (
            <StyledTableRow
              key={countryItem.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {countryItem.name}
              </TableCell>
              <TableCell align="right">{countryItem.capital}</TableCell>
              <TableCell align="right">{countryItem.population}</TableCell>
              <TableCell align="right">
                <img src={countryItem.flag} alt={countryItem.name} width={40} />
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;
