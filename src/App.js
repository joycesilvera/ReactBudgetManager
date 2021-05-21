import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      id: "a",
      title: "Toilet Paper",
      amount: "50",
      date: new Date(2019, 1, 10),
    },
    {
      id: "b",
      title: "Car Insurance",
      amount: "1500",
      date: new Date(2020, 2, 20),
    },
    { id: "c", title: "Rent", amount: "350", date: new Date(2021, 3, 30) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
