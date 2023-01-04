import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Paper, CardHeader, Table, Divider } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import PerfectScrollbar from 'react-perfect-scrollbar';

//-----------------------|| LATEST CUSTOMER ||-----------------------//

const useStyles = makeStyles((theme) => ({
    ScrollHeight: {
        height: '400px',
        paddingLeft: '16px',
        paddingRight: '16px'
    },
    root: {
        position: 'relative'
    },
    table: {
        minWidth: 650
    },
    header: {
        fontWeight: 'bold'
    },
    button: {
        display: 'flex',
        webkitBoxAlign: 'center',
        alignItems: 'center',
        webkitBoxPack: 'end',
        justifyContent: 'flex-end'
    }
}));

function createData(nation, country, name, average) {
    return { nation, country, name, average };
}

const rows = [
    createData('https://www.countryflags.io/pt/flat/32.png', 'Portugal', 16.0, 49),
    createData('https://www.countryflags.io/be/flat/32.png', 'Belgium', 6.0, 24),
    createData('https://www.countryflags.io/cn/flat/32.png', 'China', 9.0, 37),
    createData('https://www.countryflags.io/vn/flat/32.png', 'VietNam', 16.0, 49),
    createData('https://www.countryflags.io/cx/flat/32.png', 'Christmas Island', 16.0, 24),
    createData('https://www.countryflags.io/es/flat/32.png', 'Spain', 3.7, 67),
    createData('https://www.countryflags.io/pt/flat/32.png', 'Portugal', 16.0, 49),
    createData('https://www.countryflags.io/fr/flat/32.png', 'France', 16.0, 49),
    createData('https://www.countryflags.io/hr/flat/32.png', 'Croatia', 16.0, 49),
    createData('https://www.countryflags.io/pt/flat/32.png', 'Portugal', 16.0, 49)
];

export default function BasicTable() {
    const classes = useStyles();

    return (
        <Paper>
            <CardHeader title="Latest Customers"></CardHeader>
            <Divider />
            <TableContainer>
                <PerfectScrollbar component="div" className={classes.ScrollHeight}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableRow>
                            <TableCell className={classes.header}>#</TableCell>
                            <TableCell className={classes.header} align="center">
                                Country
                            </TableCell>
                            <TableCell className={classes.header} align="center">
                                Name
                            </TableCell>
                            <TableCell className={classes.header} align="center">
                                Average
                            </TableCell>
                        </TableRow>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        <img src={row.nation} alt={row.country} />
                                    </TableCell>
                                    <TableCell align="center">{row.country}</TableCell>
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center">{row.average}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </PerfectScrollbar>
            </TableContainer>
            <Divider />
        </Paper>
    );
}
