import React, { useState, useEffect } from "react";
import { getAllPlayers } from "../../services/fetchService";
import Spinner from "../spinner";

function PlayerList() {
  const [loading, updateLoading] = useState([]);
  const [player, updatePlayer] = useState([]);

  useEffect(() => {
    updatePlayers();
  }, []);

  async function updatePlayers() {
    const players = await getAllPlayers();
    updateLoading(false);
    updatePlayer(players);
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
  const items = renderPlayers(player);
  return (
    <div className="mainclass players">{loading ? <Spinner /> : items}</div>
  );
}

export default PlayerList;
