import { use, Suspense } from 'react';

const fetchProfile = async () => {
  // httpbin returns 200 or 500 approximately 50/50
  const response = await fetch('https://httpbin.org/status/200,500');
  if (!response.ok) {
    return '⚠️ Error fetching profile data.';
  }
  return '✅ Welcome, User!';
};

const profilePromise = fetchProfile();

function Profile() {
  const messageFromAPI = use(profilePromise);
  return <h1>{messageFromAPI}</h1>;
}

export function App() {
  return (
    <div>
      <Suspense fallback={<h2>🌀 Loading...</h2>}>
        <Profile />
      </Suspense>
    </div>
  );
}
