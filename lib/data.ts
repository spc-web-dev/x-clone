import React from "react";
import { FaRegBookmark, FaXTwitter } from "react-icons/fa6";
import { GoHomeFill, GoSearch, GoMail } from "react-icons/go";
import { IoNotificationsOutline, IoPersonOutline,IoStatsChartOutline } from "react-icons/io5";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import netImg from '@/public/images/net.png'
import thyImg from '@/public/images/thy.png'
import { AiOutlinePicture } from "react-icons/ai";
import { MdOutlineGifBox, MdOutlineEmojiEmotions  } from "react-icons/md";
import { TfiLayoutListThumb } from "react-icons/tfi";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { BiMessageRounded, BiRepost,BiHeart } from "react-icons/bi";

export const navData = [
  {
    id: Math.random(),
    title: "",
    icon: React.createElement(FaXTwitter),
  },
  {
    id: Math.random(),
    title: "Home",
    icon: React.createElement(GoHomeFill),
  },
  {
    id: Math.random(),
    title: "Explore",
    icon: React.createElement(GoSearch),
  },
  {
    id: Math.random(),
    title: "Notifications",
    icon: React.createElement(IoNotificationsOutline),
  },
  {
    id: Math.random(),
    title: "Messages",
    icon: React.createElement(GoMail),
  },
  {
    id: Math.random(),
    title: "Grok",
    icon: React.createElement(MdOutlineCheckBoxOutlineBlank),
  },
  {
    id: Math.random(),
    title: "Bookmarks",
    icon: React.createElement(FaRegBookmark),
  },
  {
    id: Math.random(),
    title: "Communities",
    icon: React.createElement(BsPeople),
  },
  {
    id: Math.random(),
    title: "Premium",
    icon: React.createElement(FaXTwitter),
  },
  {
    id: Math.random(),
    title: "Veriffied Orgs",
    icon: React.createElement(AiOutlineThunderbolt),
  },
  {
    id: Math.random(),
    title: "Profile",
    icon: React.createElement(IoPersonOutline),
  },
  {
    id: Math.random(),
    title: "More",
    icon: React.createElement(CiCircleMore),
  },
] as const;

export const navMobileData = [
  {
    id: Math.random(),
    title: "Home",
    icon: React.createElement(GoHomeFill),
  },
  {
    id: Math.random(),
    title: "Explore",
    icon: React.createElement(GoSearch),
  },
  {
    id: Math.random(),
    title: "Grok",
    icon: React.createElement(MdOutlineCheckBoxOutlineBlank),
  },
  {
    id: Math.random(),
    title: "Notifications",
    icon: React.createElement(IoNotificationsOutline),
  },
  {
    id: Math.random(),
    title: "Messages",
    icon: React.createElement(GoMail),
  },
  {
    id: Math.random(),
    title: "Communities",
    icon: React.createElement(BsPeople),
  },
] as const;

export const trendingData = [
  {
    category: "Trending in Cambodia",
    topic: "#Cambodia",
    postCount: 0,
  },
  {
    category: "Trending in Cambodia",
    topic: "Join Now Play Now Win Now",
    postCount: 1143,
  },
  {
    category: "Only on X · Trending",
    topic: "#FayeYoko",
    postCount: 69300,
  },
  {
    category: "Trending in Cambodia",
    topic: "min deposit $10",
    postCount: 0,
  },
  {
    category: "Trending in Cambodia",
    topic: "Welcome Bonus 100%",
    postCount: 0,
  },
  {
    category: "Trending in Cambodia",
    topic: "lowest withdraw $30",
    postCount: 0,
  },
  {
    category: "Trending in Cambodia",
    topic: "Register Link",
    postCount: 25300,
  },
  {
    category: "Trending in Cambodia",
    topic: "#PichVoteySaravody",
    postCount: 0,
  },
  {
    category: "Entertainment · Trending",
    topic: "Barbie",
    postCount: 31000,
  },
  {
    category: "Politics · Trending",
    topic: "China",
    postCount: 241000,
  },
] as const;

export const userProfileData = [
  {
    id: '@ressann',
    username: 'RESSANN ✌',
    profile: '',
    description: '',
    following: 10,
    follower: 10,
    date: new Date(Date.now()),
  },
  {
    id: '@net_god',
    username: 'NET THE GOD 🐖☠💩',
    profile: netImg,
    description: '',
    following: 100,
    follower: 1000,
    date: new Date(Date.now()),
  },
  {
    id: '@thy',
    username: 'ធី​​ សារព័ត៌មាន​ 🙉🐵',
    profile: thyImg,
    description: '',
    following: 100,
    follower: 100000,
    date: new Date(Date.now()),
  },
] as const

export const postOptionData = [
  {
    id: Math.random(),
    icon: React.createElement(AiOutlinePicture),
    title: 'Media'
  },
  {
    id: Math.random(),
    icon: React.createElement(MdOutlineGifBox),
    title: 'GIF'
  },
  {
    id: Math.random(),
    icon: React.createElement(TfiLayoutListThumb),
    title: 'Poll'
  },

  {
    id: Math.random(),
    icon: React.createElement(MdOutlineEmojiEmotions),
    title: 'Emoji'
  },
  {
    id: Math.random(),
    icon: React.createElement(RiCalendarScheduleLine),
    title: 'Schedule'
  },
  {
    id: Math.random(),
    icon: React.createElement(IoLocationOutline),
    title: 'Location'
  },
] as const

export const footerPostOptionData = [
  {
    id: Math.random(),
    icon: React.createElement(BiMessageRounded),
    title: 'Reply',
    number: 10
  },
  {
    id: Math.random(),
    icon: React.createElement(BiRepost),
    title: 'Repost',
    number: 30
  },
  {
    id: Math.random(),
    icon: React.createElement(BiHeart),
    title: 'Like',
    number: 100
  },
  {
    id: Math.random(),
    icon: React.createElement(IoStatsChartOutline),
    title: 'View',
    number: 25
  },
] as const

