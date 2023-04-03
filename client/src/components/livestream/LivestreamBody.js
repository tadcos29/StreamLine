import Logo from "./partials/Logo";
import Player from "./partials/Player";
import Title from "./partials/Title";
import ViewCount from "./partials/ViewCount";

const LivestreamBody = ({ user }) => {
  return (
    <div className="dashboard">
      <Title user={user} />

      <Player user={user} />
      <ViewCount user={user} />
    </div>
  );
};

export default LivestreamBody;
