import React from "react";
// import PlayerListItem from "../player-list-item";
import fetchService from "../../services/fetchService";
import Spinner from "../spinner";

export default class PlayerList extends React.Component {
  fetchService = new fetchService();
  state = {
    loading: true,
    Player: null,
  };

  componentDidMount() {
    this.updatePlayers();
  }

  updatePlayers() {
    this.fetchService.getAllPlayers().then((Player) => {
      this.setState({ Player, loading: false });
    });
  }

  renderPlayers = (arr) => {
    if (!this.state.loading) {
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
  };
  render() {
    const items = this.renderPlayers(this.state.Player);
    return (
      <div className="mainclass players">
        {this.state.loading ? <Spinner /> : items}
      </div>
    );
  }
}
