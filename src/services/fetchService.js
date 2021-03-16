export default class fetchService {
  getResource = async (url, headers = null) => {
    const res = await fetch(url, headers);
    if (!res.ok) {
      throw new Error(`Could no fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };

  getAllPlayers = async () => {
    const res = await this.getResource("https://alpha.tl/api?clan=1");
    return res.players.map(this._transformPlayers);
    // return JSONfunc().players.map(this._transformPlayers);
  };

  getAllStreams = async () => {
    const res = await this.getResource(
      "https://api.twitch.tv/helix/streams?user_login=maradorsc2&user_login=xfreezardx&user_login=sail___&user_login=lumumbatv&user_login=panicjohnnie",
      {
        headers: {
          "client-id": "gp762nuuoqcoxypju8c569th9wz7q5",
          Authorization: "Bearer 2v1au0vpd2mnbbdlkv193s6oknluyi",
        },
      }
    );
    return res.data.map(this._transformStreams);
  };

  _transformPlayers = (player) => {
    return {
      nickname: player.nickname || "no info",
      race: player.race || "no info",
      bnetaccount: player.bnetaccount || "no info",
      league: player.league || "no info",
    };
  };
  _transformStreams = (stream) => {
    return {
      title: stream.title || "no info",
      user_name: stream.user_name || "no info",
      user_login: stream.user_login || "no info",
    };
  };
}
