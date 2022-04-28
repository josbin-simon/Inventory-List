import React from 'react';
import { Table } from 'react-bootstrap';

export const CustomTable = (props) => {

    return <Table striped bordered hover>
        <thead>
            <tr>
                
                    {props.columns.map(column => <th>{column.title} </th>)}
               
            </tr>
        </thead>
        <tbody>
            {props.data.map((row) => {
                return <tr>
                    {props.columns.map(column => <td>{row[column.dataIndex]}</td>)}
                </tr>;
            })}
        </tbody>
    </Table>;
};