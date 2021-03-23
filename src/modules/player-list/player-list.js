import React, { useState, useEffect } from "react";
import fetchService from "../../services/fetchService";
import Spinner from "../spinner";

function PlayerList() {
  const [loading, updateLoading] = useState([]);
  const [Player, updatePlayer] = useState([]);
  const fetchData = new fetchService();
  useEffect(() => {
    updatePlayers();
  });

  function updatePlayers() {
    fetchData.getAllPlayers().then((Player) => {
      updateLoading(false);
      updatePlayer(Player);
    });
  }

  function renderPlayers(arr) {
    if (!loading) {
      return arr.map((item, i) => {
        const { race, bnetaccount, nickname, league } = item;
        return (
          <div className={race + " player"} key={nickname + i}>
            <div>
              <a href={bnetaccount} rel="noreferrer" target="_blank">
                {nickname}
              </a>
            </div>
            <p>{league}</p>
          </div>
        );
      });
    }
  }
  const items = renderPlayers(Player);
  return (
    <div className="mainclass players">{loading ? <Spinner /> : items}</div>
  );
}

export default PlayerList;
