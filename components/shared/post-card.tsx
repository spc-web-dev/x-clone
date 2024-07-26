import { footerPostOptionData } from "@/lib/data";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaRegBookmark } from "react-icons/fa6";
import { RiShare2Line } from "react-icons/ri";
import Image from "next/image";
import type { PostCardType } from "@/lib/type";
import AvatarProfile from "./avatar-profile";
import ProfileNameHover from "./profile-name-hover";

function PostCard({
  userId,
  descriptions,
  photo,
  video,
  width,
  height,
  comments,
  repost,
  likes,
  views,
}: PostCardType) {
  return (
    <div className="flex gap-2 p-3">
      <div>
        <AvatarProfile src={"https://github.com/shadcn.png"} alt="profile" fallback="PF" />
      </div>
      <Card className="p-0 border-none w-full">
        <CardHeader className="p-0">
          <div className="flex justify-between w-full">
            <CardTitle className="flex items-center gap-2">
              <ProfileNameHover name="Net the god" className=" px-0 font-sans font-bold"/><CardDescription><ProfileNameHover name="@net_god" className="px-0 font-thin"/> 44m</CardDescription>
            </CardTitle>
            <Button
              variant={"ghost"}
              className="rounded-full hover:text-blue-500"
              size={"btn"}
            >
              {" "}
              <HiOutlineDotsHorizontal />{" "}
            </Button>
          </div>
          <CardTitle className="text-sm font-normal">
            {descriptions}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {photo && <div className="relative w-fit border rounded-2xl my-4">
            <Image
              className="object-contain"
              src={photo}
              alt="post"
              width={width}
              height={height}
            />
          </div>}
        </CardContent>
        <CardFooter className="p-0 flex justify-between sm:gap-5 gap-2">
          <div className="flex justify-between flex-1">
            {footerPostOptionData.map((el) => (
              <CardDescription
                key={el.id}
                className={`flex items-center group ${
                  el.title === "Reply"
                    ? " hover:text-blue-500"
                    : el.title === "Repost"
                    ? "hover:text-green-500"
                    : el.title === "Like"
                    ? " hover:text-pink-500"
                    : "hover:text-blue-500"
                }`}
              >
                <Button
                  variant={"ghost"}
                  size={"btn"}
                  className={`text-lg rounded-full ${
                    el.title === "Reply"
                      ? " group-hover:text-blue-500 group-hover:bg-[rgba(252,128,128,0.1)]"
                      : el.title === "Repost"
                      ? "group-hover:text-green-500 group-hover:bg-[rgba(252,128,128,0.1)]"
                      : el.title === "Like"
                      ? " group-hover:text-pink-500 group-hover:bg-[rgba(252,128,128,0.1)]"
                      : "group-hover:text-blue-500 group-hover:bg-[rgba(252,128,128,0.1)]"
                  }`}
                >
                  <span>{el.icon}</span>
                </Button>
                {el.number}
              </CardDescription>
            ))}
          </div>
          <div className="flex">
            <Button
              variant={"ghost"}
              size={"btn"}
              className="rounded-full hover:text-blue-500"
              asChild
            >
              <CardDescription className=" cursor-pointer text-lg">
                <FaRegBookmark />
              </CardDescription>
            </Button>
            <Button
              variant={"ghost"}
              size={"btn"}
              className="rounded-full hover:text-blue-500"
              asChild
            >
              <CardDescription className=" cursor-pointer text-lg">
                <RiShare2Line />
              </CardDescription>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default PostCard;
