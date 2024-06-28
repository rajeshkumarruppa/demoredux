import React from 'react'
import { useSelector } from 'react-redux'


function Account() {
    let data=useSelector(
        (state)=>{
            return state;
        }
    )
  return (
    <div className='container'>
      <h1>AccountDetails</h1>
      <table className='table table-bordered w-50'>
        <thead>
        <tr>
            <th>
                balance
            </th>
            <th>
                username
            </th>
            <th>Mobile</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.account.balance}</td>
            <td>{data.account.fullName}</td>
            <td>{data.account.mobile}</td>

          </tr>
        </tbody>
      </table>
      <h1>Transaction details</h1>
      <table className='table table-bordered w-50'>
        <thead>
          <tr>
            <th>id</th>
            <th>amount</th>
            <th>type</th>
           < th>date</th>
          </tr>
        </thead>
        <tbody>
          {
            data.transaction.map((tr,index)=>(
              <tr key={tr.id}>
                <td>{tr.id}</td>
                <td>{tr.amount}</td>
                <td>{tr.type}</td>
                <td>{tr.date.toString()}</td>
              </tr>
              
            ))
          }
          
          

        </tbody>
      </table>
    </div>
  )
}

export default Account
