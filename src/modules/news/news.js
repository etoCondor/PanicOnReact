import React from "react";
import NewsItem from "../news-item";

const News = ({ posts }) => {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <div key={id} className="news">
        <NewsItem {...itemProps} />
      </div>
    );
  });
  return <div className="mainclass content">{elements}</div>;
};
export default News;
