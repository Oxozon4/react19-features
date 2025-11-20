import { Suspense, use } from 'react';

const Person = () => {
  // 1. fetch with use
  const person = use(fetchPerson());
  // 3. display in UI
  return <h1>{person.name}</h1>;
};

const App = () => {
  // 2. Show fallback
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Person />
    </Suspense>
  );
};

const fetchPerson = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  return response.json();
};

export default App;
