import { createContext, use } from 'react';

const UserContext = createContext('');

const User = () => {
  // 1. Replace useContext with use
  const user = use(UserContext);
  return <h1>Cześć, {user}</h1>;
};

const App = () => {
  return (
    <UserContext.Provider value="Daniel">
      <User />
    </UserContext.Provider>
  );
};

export default App;
