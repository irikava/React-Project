//eslint-disable-next-line 
import react, { useState } from 'react';
import './App.css';
import Com1 from './com/Com1';
import Expenses from './com/Expenses';
import NewExpense from './com/NewExpense/NewExpense';
import ConUnConState from './com/ConUnConState';

const Dummy_data = [
  {
    id: 'e1',
    title: 'SSD',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'HDD', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Display',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Mouse',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  
    const [expense,setExpenses] = useState(Dummy_data);

    const addExpenseHandler = expense1 => {
    setExpenses((prevExpenses) => {
      return [expense1, ...prevExpenses];
    });
  };
  
  // return React.createElement('div', {},
  // React.createElement('h2',{},"Let's get started!"),
  // React.createElement(Expenses,{ items: expenses})
  // );
  return (
    <div className="App">
      <nav className="App-navbar">
        <label>React Front Page</label>
        </nav>
      <header className="App-header">
      <Com1></Com1>
      
  </header>
  <content className="App-content">
    <div>
    <ConUnConState />
    </div>
  </content>

  <content className="App-form">
    <div>
     
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expense}/>
    </div>
  </content>
</div>
  );
}

export default App;
