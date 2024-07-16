import React, { useEffect, useState } from "react";
import thumb1 from "../assets/thumbnail1.png";
import valueConverter, { API_KEY, titleCompacter } from "../constants.js";
import moment from "moment";
import { Link } from "react-router-dom";

const PlayerSidebar = ({ catergoryId }) => {
  const [recommend, setRecommend] = useState([]);
  console.log(catergoryId);

  const fetchCategory = async () => {
    const categoryUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=in&videoCategoryId=${catergoryId}&key=${API_KEY}`


    await fetch(categoryUrl)
      .then((res) => res.json())
      .then((data) => setRecommend(data.items));
  };

  useEffect(() => {
    fetchCategory();
  }, [catergoryId]);

  return (
    <div className="Main px-4 py-6 bg-gray-100 flex flex-col gap-3">
     {recommend.map((items) => {
      return(
        <Link to={`/video/${items.snippet.categoryId}/${items.id}`} className="box flex gap-3 items-center">
        <div className="w-[220px]">
          <img
            className="w-full rounded-xl cursor-pointer"
            src={items.snippet.thumbnails.medium.url}
            alt=""
          />
        </div>
        <div className="w-[250px]">
          <h1 className="text-[17px] cursor-pointer">
            {titleCompacter(items.snippet.title)}
          </h1>
          <h4 className="text-[14px] text-black font-bold cursor-pointer">
            {items.snippet.channelTitle}
          </h4>
          <div className="text-[14px] mt-1 cursor-default">
            <span>{valueConverter(items.statistics.viewCount)} views &bull;</span>
            <span className="ml-6 cursor-default">{moment(items.snippet.publishedAt).fromNow()}</span>
          </div>
        </div>
      </Link>
      )
     })}
    </div>
  );
};

export default PlayerSidebar;
