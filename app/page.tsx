import Link from "next/link";
import Post from "./component/Post";

async function fetchPost(): Promise<PostData[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1/posts");
  if (!res.ok) console.log("error fetching posts");
  return res.json();
}

export default async function Home() {
  const posts = await fetchPost();
  return (
    <main className=" text-xs font-bold  bg-white  m-auto">
      <p className=" bg-red-500">Hello</p>
      {posts.map((post) => (
         <Post key={post.id} post={post} />
      ))}
      <Link href="/about">about</Link>
    </main>
  );
}
