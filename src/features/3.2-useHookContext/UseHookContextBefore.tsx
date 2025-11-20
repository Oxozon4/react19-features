import { createContext, useContext } from 'react';

// 1. Create context
const UserContext = createContext('');

const User = () => {
  // 3. read data from Context
  const user = useContext(UserContext);
  return <div>User: {user}</div>;
};

const App = () => {
  // 2. add context provider and its value
  return (
    <UserContext.Provider value="Daniel">
      <User />
    </UserContext.Provider>
  );
};

export default App;
