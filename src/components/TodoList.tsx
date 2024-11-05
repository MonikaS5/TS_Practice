import useTodos from "./hooks/useTodos";

const TodoList = () => {
  const { data: todos, error, isLoading } = useTodos();
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;
  return (
    <div>
      <h4>------TodoJson-----</h4>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
