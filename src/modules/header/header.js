import React from "react";
import { NavLink, withRouter } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div id="header_background">
        <div className="header">
          <a href="http://panicteam.ru">
            <p className="title">Panic Team</p>
          </a>
          <div className="nav">
            {this.props.links.map((link) => {
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
}

export default withRouter(Header);
