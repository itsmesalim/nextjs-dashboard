const Posts = async (props: any) => {

  const user = await props.params;
  console.log("user....", user);

  return (
    <>
      <h1>dynamic route segment</h1>

      <p>user name : {user.usename}  </p>
      <p>user id : {user.postid}  </p>
    </>
  );
};

export default Posts;
