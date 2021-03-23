import React from "react";
import logoAlpha from "../../img/logo-alpha.svg";

function sidebar() {
  return (
    <div className="side_right">
      <div className="alphaLink">
        <a href="https://spire.gg/club/1" rel="noreferrer" target="_blank">
          <img src={logoAlpha} alt="Alpha cs2 Team League" />
        </a>
      </div>

      <iframe
        title="Discord"
        className="discord"
        src="https://discordapp.com/widget?id=392145507671212053&theme.."
        allowtransparency="true"
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default sidebar;
