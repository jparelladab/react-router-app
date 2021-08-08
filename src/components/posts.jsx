import React from "react";

// match is a destructured object from props
const Posts = ({match}) => {
  return (
    <div>
      <h1>Posts</h1>
      Year: {match.params.year}, Month: {match.params.month}
    </div>
  );
};

export default Posts;
