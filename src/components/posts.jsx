import React from "react";
import QueryString from "qs";

// match is a destructured object from props
// location is for the querystring
const Posts = ({match, location}) => {
  const {approved, sortBy } = QueryString.parse( location.search.slice(1));
  return (
    <div>
      <h1>Posts</h1>
      Year: {match.params.year}, Month: {match.params.month}
    </div>
  );
};

export default Posts;
