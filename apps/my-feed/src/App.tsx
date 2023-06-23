import { useEffect, useState } from "react";
import { fetchPosts } from "./services/post.service";
import { IPost } from "./models/post.model";
import { Card } from "kit-ui";

function App() {
  const [posts, setPosts] = useState<IPost[]>();

  useEffect(() => {
    (async () => {
      const respPosts = await fetchPosts();
      setPosts(respPosts);
    })();
  }, []);

  return (
    <div>
      <h1>My feed</h1>
      <div>
        {posts?.map((post) => (
          <Card key={post.id} header={post.title}>
            {post.body}
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
