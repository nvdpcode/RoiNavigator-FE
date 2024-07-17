import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import "./roiEstimate.css";
import ChildTable from '../../commonComponent/childtable';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('Account Inc Pvt');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const rows = [
     {
         headername:"ROI Name",
         name:"ROI Plan of Dec 23",
         created_at:"2020-10-02",
         status: 'Completed'
     },
     {
       headername:"Created",
        name :"ROI Estimation for Marketing",
        created_at:"2020-10-02",
        status: "In Progress"
     },
     {
        headername:"Status",
        name : "Plan for Year 2024",
        created_at:"2020-10-02",
        status:"In Progress"
     },
     {
        headername:"Action"
     }
  ];

  return (
    <div style={{ width: "100%" }}>
      {["Account Inc Pvt","Software Inc Pvt","Finance Inc Pvt"].map((item, index) => {
        return (
          <Accordion style={{ border: "0px solid white" }} expanded={expanded === item} onChange={handleChange(item)}>
            <AccordionSummary style={index == 1 ? { backgroundColor: "white" } : {}} aria-controls="panel1d-content" id="panel1d-header">
              <Typography>{item}</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <TableContainer style={{ borderRadius: "0px", boxShadow: "1px 1px 1px -1px" }} component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow style={{ backgroundColor: "#efefef" }}>
                      {
                        rows.map((name)=>(
                          <TableCell align="center" sx={{ borderBottom: 'none', fontWeight:600, fontSize: "13px", padding: "6px" }}>{name.headername}</TableCell>

                        ))
                      }

                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row,index) => (
                      <>
                    { 
                      index!==3 &&(
                       <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell align='center' sx={{color:"#e10098" ,width:"200px",borderBottom: 'none', fontSize: "11px" ,padding: "6px" ,fontWeight:"600"}} component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="center" sx={{ borderBottom: 'none', fontSize: "11px", padding: "6px" }}>{row.created_at}</TableCell>
                        {/* <TableCell align="right">{row.created_at}</TableCell> */}
                        <TableCell align="center" sx={{ borderBottom: 'none', fontSize: "11px", padding: "6px" }}>{row.status}</TableCell>
                        <TableCell align="center" sx={{ borderBottom: 'none', color:"#544dac", fontSize: "15px", padding: "0px" }}><MoreHorizIcon color='#544dac' /></TableCell>
                      </TableRow>)
                    }
                    </>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>

        )
      })}

    </div>
  );
}