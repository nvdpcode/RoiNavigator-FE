import React, { useState, useMemo } from 'react';
import {
  Box,
  Table,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper
} from '@mui/material';

import { visuallyHidden } from '@mui/utils';
import CustomizedAccordions from '../component/RoiEstimate/accordian';

function createData(id, name, Customer_Name, fat, carbs, protein) {
  return { id, name, Customer_Name, fat, carbs, protein };
}

const rows = [
  createData(1, 'Cupcake', 305, 3.7, 67, 4.3),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

const headCells = [
  { id: 'Customer_Name', numeric: true, disablePadding: false, label: 'Customer Name' },
];

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead fullWidth style={{backgroundColor:"rgba(184, 185, 221, 0.3)"}}>
      <TableRow>
          {headCells.map((headCell) => (
          <TableCell
            style={{display:"flex", height:"15px"}}
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function EnhancedTable() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('Customer_Name');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (event, id) => { };

  const visibleRows = useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: '97%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 900 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />  
            <TableBody style={{width:"100%"}}>
            <TableRow>
                <TableCell style={{ width: '100%' }}>
                  <CustomizedAccordions />
                </TableCell>
              </TableRow>  
          </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
