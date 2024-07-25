import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgb(78 79 169)",
    color: theme.palette.common.white
    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 10,
  },
}));

const Timelinetable = ({totalBen=[],totalfirst=[], positiveBenefits, years, profitTitle = '', subTitle=[], firstRow = [], secondRow = [], thirdRow = [], fourthRow = [], fivth = [] }) => {
  const renderRows = (rows, label) => (
    rows.map((row, index) => (
      <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell align="start" sx={{ color: "rgb(78 79 169)", borderBottom: 'none', fontSize: "11px", padding: "8px" }}>{label}</TableCell>
        {years.map((year, idx) => (
          <TableCell key={idx} align="center" sx={{ borderBottom: 'none', fontSize: "11px", padding: "8px" }}>
            {row[`Year${idx}`] ? (
              <span style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>    
                <span>$</span><span>{row[`Year${idx}`].value.toFixed(2)}</span>
              </span>
            ) : (
              <span style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>--</span>
            )}
          </TableCell>
        ))}
      </TableRow>
    ))
  );

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}>
      <Box style={{ display: "flex", width: '88%', border: "1px solid rgb(247 247 247)" }}>
        <TableContainer style={{ borderRadius: "0px", boxShadow: "1px 1px 1px -1px" }}>
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "#efefef" }}>
                <TableCell align="center" sx={{ color: "rgb(78 79 169)", fontWeight: "600", backgroundColor: "white", fontSize: "15px", padding: "6px" }}>{profitTitle}</TableCell>
                {years.map(year => (
                  <StyledTableCell align='right' key={year}><span style={{ width: "52px", display: "flex" }}>{year}</span></StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {subTitle[0] && (
                <>
                  <TableRow>
                    <TableCell align="start" sx={{ color: "#e10098", fontWeight: "600", fontSize: "14px", padding: "9px" }} colSpan={years.length + 1}>
                      {subTitle[0]}
                    </TableCell>
                  </TableRow>
                  {renderRows(firstRow, positiveBenefits ? 'ServiceDesk' : 'Implementation and Training')}
                  {renderRows(secondRow, 'SoftwareLicence')}
                  {renderRows(totalfirst,"subTotal")}
                  {renderRows(totalBen,"Total Benifits")}
                </>
              )}
              {subTitle[1] && (
                <>
                  <TableRow>
                    <TableCell align="start" sx={{ color: "#e10098", fontWeight: "600", fontSize: "14px", padding: "9px" }} colSpan={years.length + 1}>
                      {subTitle[1]}
                    </TableCell>
                  </TableRow>
                  {renderRows(thirdRow, positiveBenefits ? 'User Productivity' : 'Professional Services')}
                  {renderRows(fourthRow, 'Licence')}
                  {renderRows(fivth, 'Add-Ons')}
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};



export default Timelinetable;
