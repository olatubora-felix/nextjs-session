"use client";

const error = ({ error }: { error: Error }) => {
  console.log(error);
  return <div>Error: {error.message}</div>;
}

export default error