import React from "react";
import PlayVideo from "../../components/PlayVideo";
import PlayerSidebar from "../../components/PlayerSidebar";
import { useParams } from "react-router-dom";

const Player = () => {
  const { videoId, categoryId } = useParams();
  return (
    <div className="p-3 flex">
      <PlayVideo videoId={videoId} />
      <PlayerSidebar catergoryId={categoryId} />
    </div>
  );
};

export default Player;
