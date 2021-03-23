import React from "react";
import { NavLink, withRouter } from "react-router-dom";

function header({ links }) {
  return (
    <div id="header_background">
      <div className="header">
        <a href="http://panicteam.ru">
          <p className="title">Panic Team</p>
        </a>
        <div className="nav">
          {links.map((link) => {
            return (
              <NavLink
                exact
                activeClassName="activeClass"
                to={link.route}
                key={link.route}
              >
                {link.text}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default withRouter(header);
