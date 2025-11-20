import { useMemo, useCallback } from 'react';

interface User {
  id: number;
  name: string;
}

interface UserProfileProps {
  user: User;
}

const UserProfile = ({ user }: UserProfileProps) => {
  // We have to manually memoize this expensive calculation
  const welcomeMessage = useMemo(() => {
    console.log('Calculating welcome message...');
    return `Welcome back, ${user.name}!`;
  }, [user.name]);

  // We have to manually memoize this function to stabilize its identity
  const handleClick = useCallback(() => {
    alert(`Following ${user.name}`);
  }, [user.name]);

  return (
    <div>
      <p>{welcomeMessage}</p>
      <button onClick={handleClick}>Follow</button>
    </div>
  );
};

export default UserProfile;
