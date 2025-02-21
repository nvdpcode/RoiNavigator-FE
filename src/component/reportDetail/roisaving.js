import React from 'react'
import {Table,Box} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
) {
  return { name, calories, fat, carbs, protein };
}

const titleNames={
  L1DesktopSupport:"L1 Desktop Support",
  L2DesktopSupport:"L2 Desktop Support",
  L3DesktopSupport: "L3 Desktop Support",
  DeviceRefresh:"Device Refresh",
  softwareLicence	: "software Licence",
  userProductivity: "User Productivity",
  savingperAnnum:"Saving Per Annum"
}

function Roisaving({savings}) {
  const getValidDate=(date)=>{
    let dates = new Date(date);
    const month = dates.toLocaleString('en-us', { month: 'short' });
    const year = dates.getFullYear();
    return `${month} ${year}`
  }
    return (
      <Box style={{ display:"flex",width:'80%',border:"1px solid rgb(247 247 247)"}}>
      <TableContainer style={{borderRadius:"0px",boxShadow:"1px 1px 1px -1px"}} component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{backgroundColor:"#efefef"}}>
              {
                savings.name.map((title)=>(
                  <TableCell align="center" sx={{ borderBottom: 'none',minWidth:"92px",fontSize:"11px",padding:"6px",minWidth:"92px" }}>{titleNames[title]}</TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {savings?.data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                  {row.date && (
                  <TableCell align="center"  sx={{ borderBottom: 'none', fontSize: "11px", padding: "6px" }}>{getValidDate(row.date)}</TableCell>
                )}
                 {(row.savingsPerAnnum || row.savingsPerAnnum==0) && (
                  <TableCell align="center" sx={{ borderBottom: 'none', fontSize: "11px", padding: "6px" }}>{row.savingsPerAnnum}</TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
    );
}

export default Roisaving
