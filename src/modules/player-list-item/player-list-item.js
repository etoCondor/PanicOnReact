import React from "react";
let allPl = [];
const getPlayers = () => {
  fetch("https://alpha.tl/api?clan=1")
    .then((data) => data.json())
    .then((json) => (allPl = json))
    .catch(() => {
      console.error("ERROR!");
      alert("Не удалось загрузить список игроков, попробуйте еще раз!");
    });
};
getPlayers();

export default class PlayerListItem extends React.Component {
  render() {
    setTimeout(() => console.log(allPl), 3000);
    return (
      <>
        <div></div>
      </>
    );
  }
}
