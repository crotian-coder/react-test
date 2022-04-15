import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { item } from "../constants/varients";
const StoryCard = ({ profilePic, username }) => {
  return (
    <motion.div layout variants={item} className="flex flex-col items-center">
      <LazyLoadImage
        src={profilePic}
        alt={username}
        placeholderSrc="https://parkridgevet.com.au/wp-content/uploads/2020/11/Profile-300x300.png"
        className="h-16 w-16 aspect-square rounded-full object-cover object-center p-1 border-2 border-pink-600"
      />
      <Link to={`/${username}`} className="text-xs">
        {username.length > 10 ? `${username.slice(0, 10)}...` : username}
      </Link>
    </motion.div>
  );
};

export default StoryCard;
