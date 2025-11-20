import { useEffect, useState } from 'react';

const Person = () => {
  // 2. set in state
  const [person, setPerson] = useState<{ name: string } | null>(null);

  // 1. fetch in useEffect
  useEffect(() => {
    fetchPerson().then((data) => setPerson(data));
  }, []);

  if (!person) {
    return <div>Loading...</div>;
  }

  // 3. display in UI after handling loading and error cases
  return <div>{person.name}</div>;
};

const fetchPerson = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  return response.json();
};

export default Person;
