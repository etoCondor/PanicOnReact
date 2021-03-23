import React from "react";

const NewsItem = ({ paragraph, author, date }) => {
  return (
    <>
      <p>{paragraph}</p>
      <div className="author">
        {author}
        <br />
        {date}
      </div>
    </>
  );
};
export default NewsItem;
