import React from "react";

export default class NewsItem extends React.Component {
  render() {
    const { paragraph, author, date } = this.props;
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
}
