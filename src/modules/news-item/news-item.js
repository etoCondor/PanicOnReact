import React from "react";

function NewsItem({ paragraph, author, date }) {
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
}
export default NewsItem;
