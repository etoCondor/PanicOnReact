import React from "react";
import VKLogo from "../../img/vk.png";
import TwitterLogo from "../../img/twitter.png";

function Footer() {
  return (
    <footer>
      <div id="social">
        <a href="https://vk.com/panicteam" rel="noreferrer" target="_blank">
          <img className="social-img" id="vk" src={VKLogo} alt="vk.com" />
        </a>
        <a
          href="https://twitter.com/paniciteam"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="social-img"
            id="twitter"
            src={TwitterLogo}
            alt="twitter"
          />
        </a>
      </div>
      <a
        href="https://blizzard.com/"
        rel="noreferrer"
        target="_blank"
        id="blizzard"
      >
        <div id="blizzard">
          <span>
            StarCraft II: Legacy of the Void trademark
            <br />
            as well as some of the bitmaps are
            <br />
            owned by Blizzard Entertainment.
          </span>
        </div>
      </a>
      <p className="dev">© Panic Dev Team 2014-2021</p>
    </footer>
  );
}

export default Footer;
