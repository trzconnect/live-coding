import { IComment, IPost } from "../models/post.model";

export async function fetchPosts(): Promise<IPost[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des articles.");
  }
  const posts: IPost[] = await response.json();

  return posts;
}

export async function fetchComments(): Promise<IComment[]> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);

  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des commentaires.");
  }

  return await response.json();
}
