import React, { useEffect, useState } from "react";

import video from "../assets/video.mp4";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import jack from "../assets/jack.png";
import user_profile from "../assets/user_profile.jpg";
import notification from "../assets/notification.png";
import menu_logo from "../assets/menu_logo.png";
import valueConverter, { API_KEY } from "../constants.js";
import moment from "moment";

const PlayVideo = ({ videoId }) => {
  const [videoDatails, setVideoDetails] = useState(null);

  const [creator, setCreator] = useState(null);

  const [comment, setCommect] = useState([]);

  const fetchVideo = async () => {
    const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoUrl)
      .then((response) => response.json())
      .then((data) => setVideoDetails(data.items[0]))
      .catch((err) => {
        console.error("Error fetching video data: ", err);
      });
  };

  const fetchCreator = async () => {
    const creatorUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoDatails.snippet.channelId}&key=${API_KEY}`;

    await fetch(creatorUrl)
      .then((res) => res.json())
      .then((data) => setCreator(data.items[0]));
  };

  const fetchComment = async () => {
    const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;

    await fetch(commentUrl)
      .then((res) => res.json())
      .then((data) => setCommect(data.items));
  };

  useEffect(() => {
    fetchVideo();
    fetchCreator();
    fetchComment();
  }, [videoId]);

  return (
    <div className="w-[1000px]">
      <div className="w-[1000px] pl-3">
        {/* <video src={video} controls muted className="rounded-xl"></video> */}
        <iframe
          className="rounded-xl w-full h-[600px]"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <h1 className="pl-4 text-xl mt-2 font-bold font-sans">
          {videoDatails ? videoDatails.snippet.title : "Title"}
        </h1>
      </div>
      <div className="flex items-center p-2">
        <div className="pl-3 flex mt-3 gap-3 items-center">
          <img
            className="rounded-full w-[50px]"
            src={creator ? creator.snippet.thumbnails.default.url : "No Image"}
            alt=""
          />
          <div>
            <h2 className="cursor-pointer text-md font-bold">
              {videoDatails ? videoDatails.snippet.channelTitle : ""}
            </h2>
            <h4 className="mt-[-5px]">
              {creator
                ? valueConverter(creator.statistics.subscriberCount)
                : ""}{" "}
              Subscribers
            </h4>
          </div>
        </div>
        <div className=" ml-14 flex gap-4">
          <button className="px-4 py-1 bg-gray-700 text-white rounded-2xl mt-3 hover:bg-gray-900">
            Join
          </button>
          <button className="flex items-center px-4 py-1 bg-gray-700 text-white rounded-2xl mt-3 text-[18px] gap-2 hover:bg-gray-900">
            <img className="w-[25px]" src={notification} alt="" />
            Subscribe
          </button>
        </div>
        <div className="flex items-center justify-between bg-gray-700 text-white rounded-3xl mt-3 ml-14">
          <div className="flex items-center px-3 py-1 hover:bg-gray-800 rounded-l-3xl cursor-pointer">
            <img className="w-[30px]" src={like} alt="" />
            <h2 className="ml-1">
              {videoDatails
                ? valueConverter(videoDatails.statistics.likeCount)
                : ""}
            </h2>
          </div>
          <h1 className="mt-[-2px] text-xl mr-1">|</h1>
          <div className="px-3 py-1 flex items-center hover:bg-gray-800 rounded-r-3xl cursor-pointer">
            <img className="w-[30px]" src={dislike} alt="" />
          </div>
        </div>
        <div className="bg-gray-700 rounded-3xl text-white flex items-center gap-2 justify-center px-3 py-[2px] mt-[11px] ml-6 cursor-pointer">
          <img className="w-[33px]" src={share} alt="" />
          <h2 className="text-[16px]">Share</h2>
        </div>
        <div className="bg-gray-700 rounded-3xl text-white flex items-center gap-2 justify-center px-3 py-[2px] mt-[11px] ml-4 cursor-pointer">
          <img className="w-[33px]" src={save} alt="" />
          <h2 className="text-[16px]">Download</h2>
        </div>
      </div>
      <div className="w-[1000px] flex flex-col place-items-start gap-3 bg-gray-600 text-white p-3 rounded-xl">
        <div className="Views_Section pl-3 flex items-center gap-3 font-semibold text-sm">
          <h2>
            {videoDatails
              ? valueConverter(videoDatails.statistics.viewCount)
              : ""}
            &nbsp; views
          </h2>
          <h2>
            {videoDatails
              ? moment(videoDatails.snippet.publishedAt).fromNow()
              : ""}
          </h2>
          <p className="text-gray-400 ml-4">
            {videoDatails ? videoDatails.snippet.localized.title : ""}
          </p>
        </div>
        <p className="pl-3 text-wrap text-[14px] font-semibold">
          {videoDatails ? videoDatails.snippet.description.slice(0, 200) : ""}
        </p>
        <button className="text-sm pl-3">More..</button>
      </div>
      <div className="Comment_Section flex flex-col place-items-start gap-3 mt-3 pl-3 w-full">
        <div className="TotalComment">
          <h2 className="text-3xl font-mono">
            {videoDatails
              ? valueConverter(videoDatails.statistics.commentCount)
              : ""}{" "}
            Comments
          </h2>
        </div>
        <div className="hr h-[0.5px] bg-gray-700 w-full"></div>
        {comment.map((item) => {
          return (
            <div className="comments mt-2">
              <div className="User flex gap-3">
                <div>
                  <img
                    className="w-[50px] rounded-full"
                    src={
                      item
                        ? item.snippet.topLevelComment.snippet
                            .authorProfileImageUrl
                        : ""
                    }
                    alt=""
                  />
                </div>
                <div>
                  <div className="flex justify-items-start">
                    <h2 className="text-[14px] font-semibold">
                      {comment
                        ? item.snippet.topLevelComment.snippet.authorDisplayName
                        : ""}
                    </h2>
                    <h2 className="ml-6 text-[14px]">
                      {item
                        ? moment(
                            item.snippet.topLevelComment.snippet.publishedAt
                          ).fromNow()
                        : ""}
                    </h2>
                  </div>
                  <div className="comment">
                    <p className="text-[15px]">
                     {item
                        ? 
                            item.snippet.topLevelComment.snippet.textDisplay
                        : ""}
                    </p>
                  </div>
                  <div className="flex items-center mt-2">
                    <h2 className="flex items-center gap-2">
                      <img className="w-[25px]" src={like} alt="" />
                      {item
                        ? 
                            item.snippet.topLevelComment.snippet.likeCount
                        : ""}
                    </h2>
                    <img className="w-[25px] ml-4" src={dislike} alt="" />
                    <h3 className="text-[14px] ml-4">Reply</h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
