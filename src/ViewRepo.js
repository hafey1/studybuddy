import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
    {
         id: 'title',
         label: 'Title',
         minWidth: 170,
    },
    { id: 'type', label: 'Type', minWidth: 75},
    { id: 'comments', label: 'Comments', minWidth: 75},
    { id: 'date', label: 'Date Added', minWidth: 125},
    { id: 'author', label: 'Post Author', minWidth: 75},
];

function createData(title, type, comments, date, author) {
    return { title, type, comments, date, author };
}

const rows = [
    createData(<a href={"https://www.trekbikesofmountpleasant.com/"}>Good Binary Tree Explanation</a>, 'Website', 3, "2020-10-9", 'Cole'),
    createData(<a href={"https://www.trekbikesofmountpleasant.com/"}>Khan Academy Tree Traversal</a>, 'Website', 20, '2015-11-17', 'Shaun'),
    createData(<a href={"https://www.trekbikesofmountpleasant.com/"}>Linked List Leetcode Article</a>, 'Website (LeetCode)', 10, '2020-10-4', 'Andrew'),
    createData(<a href={"https://www.trekbikesofmountpleasant.com/"}>CodeSignal Basics</a>, 'Website (CodeSignal)', 4, "2020-10-3", "Hasan"),
    createData(<a href={"https://www.trekbikesofmountpleasant.com/"}>ACTIVE Leetcode Fibonacci Article</a>, 'Website (LeetCode)', 2, "2020-10-1", "Mike"),
    createData(<a href={"http://www.crackingthecodinginterview.com/"}>Cracking the Coding Interview SPECIAL 2</a>, 'Website', 0, '2020-9-20', "Shantel"),
    createData(<a href={"https://www.trekbikesofmountpleasant.com/"}>Amazon Interview Prep</a>, 'Website (LeetCode)', 3, '2020-9-25','Kellan'),
    createData(<a href={"https://www.trekbikesofmountpleasant.com/"}>Binary Tree Java Tutorial</a>, 'Youtube Video', 8, '2020-9-06','Garrett'),
    createData(<a href={"https://www.trekbikesofmountpleasant.com/"}>Pearson Open-Source practice probs</a>, 'PDF', 24, '2020-08-12','Isaiah'),
    createData(<a href={"https://www.trekbikesofmountpleasant.com/"}>Python Linked List Implementation</a>, 'Youtube Video', 9, '2020-03-25','Aaron'),
    createData(<a href={"https://www.trekbikesofmountpleasant.com/"}>Good Recursion Practice Problems</a>, 'Website', 2, '2020-02-12','Stevie'),
    createData(<a href={"https://leetcode.com/explore/learn/card/machine-learning-101/"}>Machine Learning Concepts</a>, 'Website (LeetCode)', 10, '2020-01-26','Grace'),
    createData(<a href={"https://www.trekbikesofmountpleasant.com/"}>Microsoft Azure Student Trial</a>, 'Website', 14, '2019-12-11','Kelly'),
    createData(<a href={"https://www.trekbikesofmountpleasant.com/"}>Good Binary Tree Explanation</a>, 'Website', 4, '2019-11-14','Caroline'),
    createData(<a href={"https://www.trekbikesofmountpleasant.com/"}>Good Binary Tree Explanation</a>, 'Website', 0, '2019-02-01','Christian'),
    createData(<a href={"https://www.trekbikesofmountpleasant.com/"}>Recursion Basics</a>, 'Youtube Video', 0, '2018-11-12','Jeb'),
    createData(<a href={"https://www.trekbikesofmountpleasant.com/"}>Good Binary Tree Explanation</a>, 'PDF', 5, '2018-05-20','Dustin'),
    createData(<a href={"https://www.trekbikesofmountpleasant.com/"}>Good Binary Tree Explanation</a>, 'PDF', 7, '2018-05-17','Beau'),
    createData(<a href={"https://www.trekbikesofmountpleasant.com/"}>Good Binary Tree Explanation</a>, 'Youtube Video', 1, '2018-02-03','Sean'),
    createData(<a href={"https://www.trekbikesofmountpleasant.com/"}>Good Binary Tree Explanation</a>, 'Youtube Video', 2, '2017-10-01','Brian'),
    createData(<a href={"https://www.trekbikesofmountpleasant.com/"}>Microsoft interview prep</a>, 'Website (LeetCode)', 0, '2017-06-01','Claudia'),
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 880,
    },
});

export default function StickyHeadTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

    return (
        <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    );
}