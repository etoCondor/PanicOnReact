import React, { useState, useEffect } from "react";
import { getAllStreams } from "../../services/fetchService";
import Spinner from "../spinner";
import NoStreams from "../no-streams";

function StreamList() {
  const [loading, setLoading] = useState([]);
  const [Streams, setStreams] = useState([]);

  useEffect(() => {
    updateStreams();
  }, []);

  async function updateStreams() {
    const allStreams = await getAllStreams();
    setLoading(false);
    setStreams(allStreams);
  }

  function renderStreams(arr) {
    if (!loading) {
      return arr.map((item, i) => {
        const { title, user_name, user_login } = item;
        return (
          <div key={user_login}>
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
  }
  let items = null;
  if (loading === false && Streams.length === 0) {
    items = <NoStreams />;
  } else {
    items = renderStreams(Streams);
  }
  return (
    <div className="mainclass streams">{loading ? <Spinner /> : items}</div>
  );
}
export default StreamList;
