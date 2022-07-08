import './App.css';
import ExpenseItem from './components/ExpenseItem';

//-----------------------------------------------------------
// function App() {
//   let expenseDate = new Date(2022, 6, 22);
//   let expenseTitle = "School Fee";
//   let expenseAmount = 300;

//   return (
//     <div>
//       <h2>Let's get started</h2>
//       <ExpenseItem
//         date={expenseDate}
//         title={expenseTitle}
//         amount={expenseAmount}
//       ></ExpenseItem>
//     </div>
//   );
// };
//----------------------------------------------------------

// For multiple data we use array
function App() {
let expenses = [
  {
    id: 'e1',
    title: 'School Fee',
    amount: 250,
    date: new Date(2022, 6, 22)
  },
  {
    id: 'e2',
    title: 'House Rent',
    amount: 1000,
    date: new Date(2022, 7, 2)
  },
  {
    id: 'e3',
    title: 'Food',
    amount: 540,
    date: new Date(2022, 3, 12)
  }
];

  return (
    <div>
      <h2 className="heading">Using PROPS</h2>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}>
      </ExpenseItem>
      
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}>
      </ExpenseItem>
      
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}>
      </ExpenseItem>
    </div>
  );
};

export default App;