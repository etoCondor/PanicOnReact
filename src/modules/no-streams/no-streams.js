import sadPepe from "../../img/pepeSad.png";

const NoStreams = () => {
  return (
    <div className="errorCard">
      <img src={sadPepe} alt="sad Pepe" className="errorImage"></img>
      <h2>"Увы, в данный момент никто из наших игроков не стримит :("</h2>
    </div>
  );
};
export default NoStreams;
