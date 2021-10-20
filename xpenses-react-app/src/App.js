import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Tuvalet Kağıdı',
      amount: 94.12,
      date: new Date(2021, 8, 14),
    },
    { id: 'e2', 
      title: 'French Press Kahve', 
      amount: 27.99, 
      date: new Date(2021, 9, 21) },
    {
      id: 'e3',
      title: 'Ayakkabılık',
      amount: 50.00,
      date: new Date(2021, 9,21),
    },
    {
      id: 'e4',
      title: 'Ev Kirası',
      amount: 3010.00,
    
      date: new Date(2021, 10, 10),
    },
  ];

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
