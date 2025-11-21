/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFormState } from 'react-dom';

// 2. It then receives prev state + form data
const increment = (previousState: number, _formData: FormData) => {
  // 3. to set new state just return the new data from the action
  return previousState + 1;
};

const StatefulForm = () => {
  // 1. hook takes action + initial value, simillar to useReducer
  const [state, formAction] = useFormState(increment, 0);

  return (
    <form>
      {state}
      <button formAction={formAction}>Increment</button>
    </form>
  );
};

export default StatefulForm;
