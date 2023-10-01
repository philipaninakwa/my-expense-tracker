import { Mainheading } from "./components/mainheading";
import { Expenses } from "./components/expenses";
import { TransactionsList } from "./components/transactionsList";
import { AddTransactions } from "./components/addTransactions";
import { Balance } from "./components/balance";
import { GlobalProvider } from "./context/globalState";
import "./index.css";

function App() {
  return (
    <GlobalProvider>
      <Mainheading />
      <div className="container">
        <Balance />
        <Expenses />
        <TransactionsList />
        <AddTransactions />
      </div>
    </GlobalProvider>
  );
}

export default App;
