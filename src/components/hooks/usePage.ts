import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
interface PostQuery {
  page: number;
  pageSize: number;
}
const usePage = (query: PostQuery) =>
  useQuery<Post[], Error>({
    //users/1/posts
    queryKey: ["posts", query],
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: (query.page - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000, //1m
    // placeholderData: [], //
    notifyOnChangeProps: ["data"], //this is replacement for keepPreviousData
  });

export default usePage;
