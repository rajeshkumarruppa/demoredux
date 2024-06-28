import { useState, React } from "react";
import { useDispatch } from "react-redux";
import { deposit,withdraw,updateName,mobileUpdate } from "./action";

function Form() {
  let dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const[transactionId,UpdateTransactionId]=useState(0);

  let ondeposit = (e) => {
    let data = e.target.value;
    setAmount(data);
  };

  return (
    <div className="container">
      <h2>Form</h2>
      <div className="row">
        <div>
          <input
            className="form-control"
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={ondeposit}
          />
          <button
            className="btn-primary btn m-2"
            onClick={() => {
              dispatch(deposit(amount));
              UpdateTransactionId(transactionId+1)

              dispatch({type:"AddTransaction",payload:{id:transactionId,amount:amount,type:"credit",date:new Date()}})
              setAmount("");
             
            }}
          >
            Deposit
          </button>
          <button
            className="btn-primary btn m-2"
            onClick={() => {
              dispatch(withdraw(amount));
              UpdateTransactionId(transactionId+1)
              dispatch({type:"AddTransaction",payload:{id:transactionId,amount:amount,type:"Debit",date:new Date()}})
              setAmount("");
              setAmount("");
            }}
          >
            withdraw
          </button>
          <input
            className="form-control"
            type="text"
            placeholder="Enter fullName"
            value={fullName}
            onChange={(e) => {
              let data=e.target.value;
              setFullName(data);
            }}
          />
          <button
            className="btn btn-primary m-2"
            onClick={() => {
              dispatch(updateName(fullName));
              setFullName("");
            }}
          >
            Update
          </button>
          <input type="number" placeholder="enter mobile number" className="form-control" value={mobile} onChange={(e)=>{
            setMobile(e.target.value);
          }}/>
          <button className="btn btn-success m-2" onClick={()=>{dispatch(mobileUpdate(mobile));
          setMobile("")}}>Update</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
