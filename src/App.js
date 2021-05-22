import Expenses from "./components/Expenses/Expenses";

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
      <Expenses items={expense} />
    </div>
  );
}

export default App;
