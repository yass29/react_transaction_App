
export async function getAllTransactions() {

    try{
        const response = await fetch('http://localhost:1337/transaction');
        return await response.json();
        
    }catch(error) {
        return [];
    }
}
export async function createTransaction(data) {
    console.log('data', data);
    const response = await fetch(`http://localhost:1337/add`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:  JSON.stringify({data: data}) 
      })
      
}