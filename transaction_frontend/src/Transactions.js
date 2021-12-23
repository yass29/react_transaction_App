import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header';
import { TransactionData } from './components/TransactionData';
import CreateTransaction from './components/createTransaction';
import { getAllTransactions, createTransaction } from './services/TransactionService';

function Transactions() { 

  const [transaction, setTransaction] = useState({
    'type':'Credit',
    'balance':0,
  })
  const [transactions, setTransactions] = useState([])
  const [abc, setAbc] = useState("")


  const transactionCreate = (e) => {
    createTransaction(transaction)
        .then(response => {
          console.log(response);
      });
      setAbc("fjdagh");
  }


  const fetchAllUsers = () => {
    getAllTransactions()
      .then(transactions => {
        setTransactions(transactions);
        
      });
  }

  useEffect(() => {
    setAbc('');
    getAllTransactions()
      .then(transactions => {
        console.log(transactions)
        setTransactions(transactions);
      });
  }, [abc])

  const onChangeForm = (e) => {
      if (e.target.name === 'description') {
          transaction.description = e.target.value;
      } else if (e.target.name === 'amount') {
          transaction.amount = e.target.value;
      } else if (e.target.name === 'type') {
          transaction.type = e.target.value;

      }
      
      setTransaction(transaction)
  }
  
    
    return (
        <div className="Transactions">
          <Header></Header>
          <div className="container mrgnbtm">
            <div className="row">
              <div className="col-md-12">
                  <CreateTransaction 
                    transaction={transaction}
                    onChangeForm={onChangeForm}
                    createTransaction={transactionCreate}
                    >
                  </CreateTransaction>
              </div>
              </div>
          </div>
          <div className="row mrgnbtm">
            <TransactionData transactions={transactions}></TransactionData>
          </div>
        </div> 
    );
}

export default Transactions;
