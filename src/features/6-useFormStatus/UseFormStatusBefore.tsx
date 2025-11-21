import { useRef, useState, type FormEvent } from 'react';

interface Todo {
  id: string;
  title: string;
}

interface TodoListProps {
  initialTodos: Todo[];
}

const TodoList = ({ initialTodos }: TodoListProps) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!inputRef.current) return;

    setIsLoading(true);
    const newTodo = await createTodo(inputRef.current.value);
    setTodos((prev) => [...prev, newTodo]);
    setIsLoading(false);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Title</label>
        <input ref={inputRef} required />
        <button disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Create'}
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
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
