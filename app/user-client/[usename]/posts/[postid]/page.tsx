"use client";

import { use } from "react";

interface UserParams {
  usename: string;
  postid: string;
  phone: string;
}

interface PostsProps {
  params: Promise<UserParams>;
}

const Posts = (props: PostsProps) => {
  const userClient = use(props.params);
  console.log("userClient....", userClient);

  return (
    <>
      <h1>dynamic route segment</h1>

      <p>user name : {userClient.usename} </p>
      <p>user id : {userClient.postid} </p>
      <p>user phone : {userClient.phone} </p>
    </>
  );
};

export default Posts;
