import React from "react";
import NewsItem from "../news-item";

function news({ posts }) {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <div key={id} className="news">
        <NewsItem {...itemProps} />
      </div>
    );
  });
  return <div className="mainclass content">{elements}</div>;
}
export default news;
