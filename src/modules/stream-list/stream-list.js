import React from "react";
import fetchService from "../../services/fetchService";
import Spinner from "../spinner";
import NoStreams from "../no-streams";

export default class StreamList extends React.Component {
  fetchService = new fetchService();
  state = {
    loading: true,
    Streams: null,
  };

  componentDidMount() {
    this.updateStreams();
  }

  updateStreams() {
    this.fetchService.getAllStreams().then((Streams) => {
      this.setState({ Streams, loading: false });
    });
  }

  renderStreams = (arr) => {
    if (!this.state.loading) {
      return arr.map((item, i) => {
        const { title, user_name, user_login } = item;
        return (
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://twitch.tv/${user_login}`}
            >
              <h2>{user_name}</h2>

              <img
                alt="streamcard"
                className="streamImage"
                src={`https://static-cdn.jtvnw.net/previews-ttv/live_user_${user_login}-480x270.jpg`}
              ></img>
              <p>{title}</p>
            </a>
          </div>
        );
      });
    }
  };
  render() {
    let items = null;
    if (this.state.loading === false && this.state.Streams.length === 0) {
      items = <NoStreams />;
    } else {
      items = this.renderStreams(this.state.Streams);
    }
    return (
      <div className="mainclass streams">
        {this.state.loading ? <Spinner /> : items}
      </div>
    );
  }
}
