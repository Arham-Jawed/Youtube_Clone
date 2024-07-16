import React, { useEffect, useState } from "react";

import thumb1 from "../assets/thumbnail1.png";
import thumb2 from "../assets/thumbnail2.png";
import thumb3 from "../assets/thumbnail3.png";
import thumb4 from "../assets/thumbnail4.png";
import thumb5 from "../assets/thumbnail5.png";
import thumb6 from "../assets/thumbnail6.png";
import thumb7 from "../assets/thumbnail7.png";
import thumb8 from "../assets/thumbnail8.png";
import { Link } from "react-router-dom";
import valueConverter, { API_KEY, titleCompacter } from "../constants";
import moment from "moment";

const Feed = ({ sidebar, category }) => {
  const [data, setDate] = useState([]);

  const fetchDate = async () => {
    const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=in&videoCategoryId=${category}&key=${API_KEY}`;

    await fetch(videoUrl)
      .then((response) => response.json())
      .then((data) => setDate(data.items));
  };

  useEffect(() => {
    console.log(import.meta.env.VITE_API_KEY);
    fetchDate();
  }, [category]);

  return (
    <div
      className={`${
        sidebar
          ? "flex gap-2 flex-wrap px-8 py-3 w-full"
          : "flex gap-2 flex-wrap px-8 py-3 w-full"
      } sm:py-0 sm:flex-col sm:gap-1`}
    >
      {data.map((items, index) => {
        return (
          <Link
            to={`video/${items.snippet.categoryId}/${items.id}`}
            className="h-[280px] cursor-pointer rounded-2xl my-[20px] sm:my-0"
          >
            <img
              className={`${
                sidebar
                  ? "w-[295px] rounded-xl p-1"
                  : "w-[330px] rounded-xl p-2"
              }`}
              src={items.snippet.thumbnails.medium.url}
              alt=""
            />
            <h1 className="text-md px-2 w-[280px] leading-normal">
              {titleCompacter(items.snippet.title)}
            </h1>
            <h2 className="text-[17px] font-semibold text-black px-2 py-3 mt-[-8px]">
              {items.snippet.channelTitle}
            </h2>
            <h3 className="text-sm px-2">
              {valueConverter(items.statistics.viewCount)} &bull; &nbsp;
              &nbsp;&nbsp;&nbsp;{" "}
              <span className="text-sm font-normal">
                {moment(items.snippet.publishedAt).fromNow()}
              </span>
            </h3>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
