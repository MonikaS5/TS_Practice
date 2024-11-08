import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
const usePosts = (userId: number | undefined) =>
  useQuery<Post[], Error>({
    //users/1/posts
    queryKey: userId ? ["users", userId, "posts"] : ["posts"],
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          params: { userId },
        })
        .then((res) => res.data),
  });

export default usePosts;
