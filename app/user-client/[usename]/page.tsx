const singleProfile = async (props: any) => {

  const user = await props.params;
  console.log("user....", user);

  return (
    <>
      <h1>dynamic route segment</h1>

      <p>{user.usename}</p>
    </>
  );
};

export default singleProfile;
