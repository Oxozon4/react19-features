// With the React Compiler, no manual memoization is needed!
// It understands the dependencies and optimizes automatically.

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
  console.log('Calculating welcome message...');

  // This function's identity is automatically stabilized by the compiler.
  const handleClick = () => {
    alert(`Following ${user.name}`);
  };

  return (
    <div>
      <p>{welcomeMessage}</p>
      <button onClick={handleClick}>Follow</button>
    </div>
  );
};

export default UserProfile;
