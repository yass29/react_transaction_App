import React from 'react'

import Moment from 'moment';
const formatDate = function(value){
    return Moment(value).format("DD-MM-YYYY hh:mm:ss")
}
export const TransactionData = ({transactions}) => {

    console.log('transactions transactions:::', transactions.length)
    if (transactions.length === 0) return null 
    const UserRow = (transaction,index) => {
        
        return(
            
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  
                  <td>{transaction.id}</td>
                  <td>{formatDate(transaction.created_at)}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.amount}</td>
                  <td>{ transaction.balance} </td> 
                   
                  

              </tr>
          )
    }
    

const userTable = transactions.map((transaction,index) => UserRow(transaction,index))



    return(
        <div className="container">
            <h2>Transactions</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Transaction Id</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Remaining</th>
                    
                </tr>
                </thead>
                <tbody>
                    {userTable}
                </tbody>
            </table>
        </div>
    )
}