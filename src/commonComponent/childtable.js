import * as React from 'react';
import { Table, Box } from '@mui/material';
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

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),

];

export default function ChildTable({ withAlluvio }) {
  const getValidDate=(date)=>{
    let dates = new Date(date);
    const month = dates.toLocaleString('en-us', { month: 'short' });
    const year = dates.getFullYear();
    return `${month} ${year}`
  }
  return (
    <Box style={{ display: "flex", width: '80%', border: "1px solid rgb(247 247 247)" }}>
      <TableContainer style={{ borderRadius: "0px", boxShadow: "1px 1px 1px -1px" }} component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#efefef" }}>
              {withAlluvio.name && withAlluvio.name.map((headerName) => (
                <>
                {
                  headerName == "Number of Device on 4 Year cylce" 
                  ?
                  <TableCell align="right" sx={{ borderBottom: 'none', fontSize: "11px",width:"260px", padding: "6px",marginRight:'300px' }}>{headerName}</TableCell>
                  :
                  <TableCell align="center" sx={{ borderBottom: 'none', fontSize: "11px",width:"260px", padding: "6px" }}>{headerName}</TableCell>
                }
                </>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
  {withAlluvio?.data.map((row) => (
    <TableRow
      // key={row.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      {row.date && (
        <TableCell align="center" sx={{ borderBottom: 'none', fontSize: "11px", padding: "6px" }}>
          {getValidDate(row.date)}
        </TableCell>
      )}
      {(row.noOfTickets || row.noOfTickets === 0) && (
        <TableCell align="center" sx={{ borderBottom: 'none', fontSize: "11px", padding: "6px" }}>
          {row.noOfTickets}
        </TableCell>
      )}
      {(row.noOfDevices || row.noOfDevices === 0) && (
        <TableCell align="center" sx={{ display: "flex", marginLeft: "120px", borderBottom: 'none', fontSize: "11px", padding: "6px" }}>
          {row.noOfDevices}
        </TableCell>
      )}
      {(row.noOfUsers || row.noOfUsers === 0) && (
        <TableCell align="center" sx={{ borderBottom: 'none', fontSize: "11px", padding: "6px" }}>
          {row.noOfUsers}
        </TableCell>
      )}
      {(row.costPerDevice || row.costPerDevice === 0) && (
        <TableCell align="center" sx={{ borderBottom: 'none', fontSize: "11px", padding: "6px" }}>
          {row.costPerDevice}
        </TableCell>
      )}
      {(row.costOfSoftware || row.costOfSoftware === 0) && (
        <TableCell align="center" sx={{ borderBottom: 'none', fontSize: "11px", padding: "6px" }}>
          {row.costOfSoftware}
        </TableCell>
      )}
      {(row.waitTimeHrs || row.waitTimeHrs === 0) && (
        <TableCell align="center" sx={{ borderBottom: 'none', fontSize: "11px", padding: "6px" }}>
          {row.waitTimeHrs}
        </TableCell>
      )}
      {(row.costPerTicket || row.costPerTicket === 0) && (
        <TableCell align="center" sx={{ borderBottom: 'none', fontSize: "11px", padding: "6px" }}>
          {row.costPerTicket}
        </TableCell>
      )}
      {(row.costPerHour || row.costPerHour === 0) && (
        <TableCell align="center" sx={{ borderBottom: 'none', fontSize: "11px", padding: "6px" }}>
          {row.costPerHour}
        </TableCell>
      )}
      {(row.costPerAnnum || row.costPerAnnum === 0) && (
        <TableCell align="center" sx={{ borderBottom: 'none', fontSize: "11px", padding: "6px" }}>
          {row.costPerAnnum}
        </TableCell>
      )}
    </TableRow>
  ))}
</TableBody>

        </Table>
      </TableContainer>
    </Box>
  );
}
