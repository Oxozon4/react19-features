/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFormStatus } from 'react-dom';

const Submit = () => {
  // 2. get pending from hook
  const { pending } = useFormStatus();

  return (
    // 3. Pass pending to button
    <button disabled={pending}>{pending ? 'Loading...' : 'Create'}</button>
  );
};

const App = () => {
  const formAction = (_formData: FormData) => {};

  return (
    <form action={formAction}>
      <input name="title" required />
      {/* 1. Nest component inside Form */}
      <Submit />
    </form>
  );
};

export default App;
