import React, { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


const rows = [
  {
      "id": 1,
      "name": "test",
      "calories": "ACME",
      "fat": "Mark Robison",
      "carbs": "NPM IQ",
      "protein": "12/1/2024"
  },
  {
      "id": 2,
      "name": "test1",
      "calories": "ACME",
      "fat": "Mark Robison",
      "carbs": "NPM",
      "protein": "13/1/2024"
  },
  {
      "id": 3,
      "name": "test2",
      "calories": "ACME",
      "fat": "Mark Robison",
      "carbs": "IQ",
      "protein": "14/1/2024"
  },
  {
      "id": 4,
      "name": "test3",
      "calories": "ACME",
      "fat": "Mark Robison",
      "carbs": "Aternity NPM",
      "protein": "12/12/42"
  },
  {
      "id": 5,
      "name": "test4",
      "calories": "ACME",
      "fat": "Mark Robison",
      "carbs": "Aternity",
      "protein": 3.9
  },
  {
      "id": 6,
      "name": "test5",
      "calories": "ACME",
      "fat": "Mark Robison",
      "carbs": 87,
      "protein": 6.5
  }
]

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'ROI name',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'Account',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'Creator',
  },
  {
    id: 'Product',
    numeric: true,
    disablePadding: false,
    label: 'Product',
  },
  {
    id: 'TCV',
    numeric: true,
    disablePadding: false,
    label: 'TCV',
  },
  {
    id: 'ROI',
    numeric: true,
    disablePadding: false,
    label: 'ROI',
  },
  {
    id: 'Payback Peroid',
    numeric: true,
    disablePadding: false,
    label:'Payback Peroid',
  },
  {
    id: 'NPV',
    numeric: true,
    disablePadding: false,
    label: 'NPV',
  },
  {
    id: 'Date',
    numeric: true,
    disablePadding: false,
    label: 'Date',
  },

];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } =
    props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy ? order : false}
            sx={{ borderBottom: 'none',fontSize:"11px" }}
          >
            {headCell.label}
            <TableSortLabel
              active={true}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              IconComponent={KeyboardArrowDownIcon}
            >
            </TableSortLabel>
          
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}


export default function DashboardTable() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  // const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  

  // const handleClick = (event, id) => {
  //   const selectedIndex = selected.indexOf(id);
  //   let newSelected = [];
  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, id);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1),
  //     );
  //   }
  //   setSelected(newSelected);
  // };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };



  const visibleRows = useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box  id="downloadPdf3" sx={{ width: '930px', height: '211px', marginTop:"-9px", marginLeft:"-46px" ,alignSelf:'center' , border:"none" }}>
      <Paper sx={{ width: '100%', mb: 2 , boxShadow:"none"}}>
        <TableContainer>
          <Table sx={{ minWidth: 900 }} aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
            <EnhancedTableHead
              // numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody sx={{border:'none'}}>
              {visibleRows.map((row, index) => {
                return (
                  <TableRow
                    hover
                    // onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}
                    sx={{ cursor: 'pointer' , }}
                  >
                    <TableCell component="th" id={''} scope="row"   sx={{ borderBottom: 'none' }} padding="none">
                      {row.name}
                    </TableCell>
                    <TableCell sx={{ borderBottom: 'none',fontSize:"11px", padding:"6px" }} align="center">{row.calories}</TableCell>
                    <TableCell sx={{ borderBottom: 'none',fontSize:"11px",padding:"6px" }} align="center"> <a href={row.fat} target="_blank" rel="noopener noreferrer">{row.fat}</a></TableCell>
                    <TableCell sx={{ borderBottom: 'none',fontSize:"11px",padding:"6px" }} align="center">{row.carbs}</TableCell>
                    <TableCell sx={{ borderBottom: 'none',fontSize:"11px",padding:"6px" }} align="center">{row.protein}</TableCell>
                    <TableCell sx={{ borderBottom: 'none',fontSize:"11px",padding:"6px" }} align="center">{row.calories}</TableCell>
                    <TableCell sx={{ borderBottom: 'none',fontSize:"11px",padding:"6px" }} align="center">{row.fat}</TableCell>
                    <TableCell sx={{ borderBottom: 'none',fontSize:"11px",padding:"6px" }} align="center">{row.carbs}</TableCell>
                    <TableCell sx={{ borderBottom: 'none',fontSize:"11px",padding:"6px" }} align="center">{row.protein}</TableCell>
                  </TableRow>
                );
              })}
            
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
