// With the React Compiler, no manual memoization is needed!
// It understands the dependencies and optimizes automatically.

import { useCallback, useEffect } from 'react';

interface User {
  id: number;
  name: string;
}

interface UserProfileProps {
  user: User;
}

const UserProfile = ({ user }: UserProfileProps) => {
  // This calculation is automatically memoized by the compiler.
  // It will only re-run if `user.name` changes.
  const welcomeMessage = `Welcome back, ${user.name}!`;

  // This function's identity is automatically stabilized by the compiler.
  const handleClick = useCallback(() => {
    alert(`Following ${user.name}`);
  }, [user.name]);

  useEffect(() => {
    // Simulate some side effect that uses the memoized values, eg. API call could go here
    if (Math.random() > 0.5) {
      handleClick();
      console.log(welcomeMessage);
    }
  }, [handleClick, welcomeMessage]);

  return (
    <div>
      <p>{welcomeMessage}</p>
      <button onClick={handleClick}>Follow</button>
    </div>
  );
};

export default UserProfile;
