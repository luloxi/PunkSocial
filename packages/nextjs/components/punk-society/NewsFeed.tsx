import React from "react";
import { Post } from "../../app/explore/Explore";
import { PostCard } from "./PostCard";

type NewsFeedProps = {
  posts: Post[];
};

export const NewsFeed: React.FC<NewsFeedProps> = ({ posts }) => {
  return (
    <div className="mt-4 lg:mt-0 lg:flex lg:justify-center lg:items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-3 lg:my-2">
        {posts.map(post => (
          <PostCard post={post} key={post.uri} />
        ))}
      </div>
    </div>
  );
};