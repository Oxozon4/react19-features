import { useMemo, useCallback, useEffect } from 'react';

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
    return `Welcome back, ${user.name}!`;
  }, [user.name]);

  // We have to manually memoize this function to stabilize its identity
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
