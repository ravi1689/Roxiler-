import React from 'react';
import "./TransactionsTable.css"

const TransactionsTable = ({
    transactions
}) => {

    const columns = [{
        name: "Id",
        dataField: "id"
    }, {
        name: "Title",
        dataField: "title"
    }]

    return (
        <center>

            <table border="1px" >
                <thead>
                    <tr border="1px" style={{ padding: '10px' }}>
                     {columns.map(column =>   <th key={column.dataField} style={{ padding: '10px' }}>
                        {
                            column.name
                        }
                     </th>)}
                
                    </tr>
                </thead>
                <tbody>

                  {transactions.map(txn =>  <tr key={txn.id} style={{ padding: '10px' }}>


                      {columns.map(column =>  <td style={{ padding: '10px' }}>{
                        txn[column.dataField]
                      }</td>)}

                    </tr>)}

                </tbody>

            </table>
            <button className='btn'>Previous</button>
            <button className='button' >Next</button>
        </center>
    );
};

export default TransactionsTable;
