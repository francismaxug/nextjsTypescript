import React from "react";

interface PostProps {
  post: PostData;
}
export default function Post({ post }: PostProps) {
  return (
    <div className="card">
      <h2 className=" text-blue-400">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
