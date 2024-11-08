import { useState } from "react";
import usePage from "./hooks/usePage";

const Pagination = () => {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const { data: posts, error, isLoading } = usePage({ page, pageSize });
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;
  return (
    <div>
      <h4>------postJson-----</h4>

      <ul className="list-group">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id} className="list-group-item">
              {post.title}
            </li>
          ))
        ) : (
          <li>No posts available</li>
        )}
      </ul>
      <button
        disabled={page === 1}
        className="btn btn-primary my-3"
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <button
        className="btn btn-primary ms-3"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
