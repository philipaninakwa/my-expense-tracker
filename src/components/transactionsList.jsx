import {React, useContext} from "react";
import {GlobalContext} from "../context/globalState";
import { Transaction } from "./Transaction";

export const TransactionsList = () => {
  const { transactions } = useContext(GlobalContext);
  
  return (
    <>
      <h3>History</h3>
      <ul className="list">
         {transactions.map(transaction => (<Transaction transaction= {transaction} key={transaction.id}/>))}
      </ul>
    </>
  );
};
