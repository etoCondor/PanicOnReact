import React from "react";

const Header = () => {
  return (
    <div id="header_background">
      <div className="header">
        <a href="http://panicteam.ru">
          <p className="title">Panic Team</p>
        </a>
        <div className="nav">
          <ul>
            <li className="navNews">Новости</li>
            <li className="navPlayers">Состав команды</li>
            <li className="navStreams">Трансляции</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
