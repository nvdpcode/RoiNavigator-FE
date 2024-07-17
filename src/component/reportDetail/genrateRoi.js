import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgb(78 79 169)",
    color: theme.palette.common.white,
    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 10,
  },
}));

const years = ["Year 0 2022", "Year 1 2023", "Year 2 2024", "Year 3 2025", "Year 4 2026", "Year 5 2027"];

function TimeLineRoi() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}>
      <Box style={{ display: "flex", width: '88%', border: "1px solid rgb(247 247 247)" }} >
        <TableContainer style={{ borderRadius: "0px", boxShadow: "1px 1px 1px -1px" }} >
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "#efefef" }}>
                <TableCell align="center" sx={{color:"rgb(78 79 169)",fontWeight:"600", backgroundColor: "white", fontSize: "15px", padding: "6px" }}>Benefit in Positive $</TableCell>
                {years.map(year => (
                  <StyledTableCell align='right' key={year}><span style={{width:"52px",display:"flex"}}>{year}</span></StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="start" sx={{ color: "#e10098", fontWeight: "600", fontSize: "14px", padding: "9px" }} colSpan={years.length + 1}>
                  Digital Workplace Benefits
                </TableCell>
              </TableRow>
              {["Service Desk", "Device Refresh", "Software License", "Sub total"].map((row) => (
                <TableRow
                  // key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >                 <TableCell align="start" sx={{ color: "rgb(78 79 169)", borderBottom: 'none', fontSize: "11px",padding:"8px" }}>{row}</TableCell>
                                  <TableCell align="center" sx={{ borderBottom: 'none', fontSize: "11px",padding:"8px" }}><span style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}><span>$</span><span>244</span></span></TableCell>           
                                  <TableCell align="center" sx={{ borderBottom: 'none', fontSize: "11px",padding:"8px" }}><span style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}><span>$</span><span>244</span></span></TableCell>
                                  <TableCell align="center" sx={{ borderBottom: 'none', fontSize: "11px",padding:"8px" }}><span style={{}}>--</span></TableCell>
                                  <TableCell align="center" sx={{ borderBottom: 'none', fontSize: "11px",padding:"8px" }}><span style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}><span>$</span><span>244</span></span></TableCell>
                                  <TableCell align="center" sx={{ borderBottom: 'none', fontSize: "11px",padding:"8px" }}><span style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}><span>$</span><span>244</span></span></TableCell>
                                  <TableCell align="center" sx={{ borderBottom: 'none', fontSize: "11px",padding:"8px" }}><span style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}><span>$</span><span>244</span></span></TableCell>

                </TableRow>
              ))}
               <TableRow>
                <TableCell align="start" sx={{ color: "#e10098", fontWeight: "600", fontSize: "14px", padding: "9px" }} colSpan={years.length + 1}>
                  Non-Digital Workplace Benefits
                </TableCell>
              </TableRow>
              {["User Productivity","Sub total","Total Benefits"].map((row) => (
                <TableRow
                  // key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >                 <TableCell align="start" sx={{ color: "rgb(78 79 169)", borderBottom: 'none', fontSize: "11px",padding:"8px" }}>{row}</TableCell>
                                  <TableCell align="center" sx={{ borderBottom: 'none', fontSize: "11px",padding:"8px" }}><span style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}><span>$</span><span>244</span></span></TableCell>           
                                  <TableCell align="center" sx={{ borderBottom: 'none', fontSize: "11px",padding:"8px" }}><span style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}><span>$</span><span>244</span></span></TableCell>
                                  <TableCell align="center" sx={{ borderBottom: 'none', fontSize: "11px",padding:"8px" }}><span style={{}}>--</span></TableCell>
                                  <TableCell align="center" sx={{ borderBottom: 'none', fontSize: "11px",padding:"8px" }}><span style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}><span>$</span><span>244</span></span></TableCell>
                                  <TableCell align="center" sx={{ borderBottom: 'none', fontSize: "11px",padding:"8px" }}><span style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}><span>$</span><span>244</span></span></TableCell>
                                  <TableCell align="center" sx={{ borderBottom: 'none', fontSize: "11px",padding:"8px" }}><span style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}><span>$</span><span>244</span></span></TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default TimeLineRoi;
