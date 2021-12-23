import React from 'react'


const CreateTransaction = ({onChangeForm, createTransaction}) => {


    return( 
        <div className="container">
            <div className="row">
                <div className="col-md-12 mrgnbtm">
                <h2>Create Transaction</h2>
                
                <br>
                </br>
                <form>
                    <div className="row">
                        <div className="form-group col-md-4">
                            <label htmlFor="exampleInputEmail1">Description</label>
                            <input type="text" required onChange={(e) => onChangeForm(e)}  className="form-control" name="description" id="description"  placeholder="Description" />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="exampleInputPassword1">Type</label>
                            <select name="type" onChange={(e) => onChangeForm(e)}  className="form-control"  id="types" >
                                <option value="Credit" >
                                    Credit
                                </option>
                                <option value="Debit">
                                    Debit
                                </option>
                            </select>
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="exampleInputEmail1">Amount</label>
                            <input type="number" required onChange={(e) => onChangeForm(e)}  className="form-control" name="amount" id="amount"  placeholder="Amount" />
                        </div>
                        <div className="form-group col-md-2">
                        <label htmlFor="exampleInputEmail1"></label>
                            <button type="button" onClick= {(e) => createTransaction()} className="btn btn-danger">Add Transaction</button>
                        </div>
                        
                     </div> 
                    
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateTransaction