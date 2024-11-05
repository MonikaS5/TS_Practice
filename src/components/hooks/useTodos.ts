import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}
const useTodos = () => {
  const fetchTodo = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);

  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodo,
  });
};

export default useTodos;
