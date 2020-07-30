import React from "react";

export const List = ({ data }) => {
  if (!data) return null;
  if (!data.length) return <p>No data</p>;
  return (
    <ul>
      {data.map((repo) => {
        return <li key={repo.id}>{repo.full_name}</li>;
      })}
    </ul>
  );
};
