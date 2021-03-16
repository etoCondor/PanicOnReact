import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div id="header_background">
        <div className="header">
          <a href="http://panicteam.ru">
            <p className="title">Panic Team</p>
          </a>
          <div className="nav">
            <ul>
              {this.props.links.map((link) => {
                return (
                  <li
                    key={link.page}
                    className={
                      this.props.activePage === link.page ? "activeClass" : ""
                    }
                    onClick={() => {
                      this.props.changePage(link.page);
                    }}
                  >
                    {link.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
