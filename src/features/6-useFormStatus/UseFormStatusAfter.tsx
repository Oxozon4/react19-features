import { useState } from 'react';
import { useFormStatus } from 'react-dom';

interface Todo {
  id: string;
  title: string;
}

interface TodoListProps {
  initialTodos: Todo[];
}

const TodoList = ({ initialTodos }: TodoListProps) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const onSubmit = async (data: FormData) => {
    const title = data.get('title');

    if (typeof title !== 'string') return;

    // Make sure that there is any kind of async action with await
    const newTodo = await createTodo(title);
    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <div>
      <form action={onSubmit} method="post">
        <label>Title</label>
        <input name="title" required />
      </form>
      <SubmitButton />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

// Create nested component, simillary as with Context API
const SubmitButton = () => {
  const data = useFormStatus();
  const isLoading = data.pending;
  console.log('useFormStatus data: ', data);

  return (
    <button disabled={isLoading}>{isLoading ? 'Loading...' : 'Create'}</button>
  );
};

const createTodo = async (title: string): Promise<Todo> => {
  const wait = (value: Todo, duration: number) => {
    return new Promise<Todo>((resolve) => {
      setTimeout(() => resolve(value), duration);
    });
  };

  return wait({ id: crypto.randomUUID(), title }, 1000);
};

export default TodoList;
