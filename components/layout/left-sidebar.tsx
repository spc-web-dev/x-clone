import { navData } from "@/lib/data";
import NavItem from "../sidebar/nav-item";
import { Button } from "../ui/button";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { Label } from "../ui/label";
import { MdMoreHoriz } from "react-icons/md";
import Image from "next/image";
import ximg from '@/public/images/ximage2.webp'

export default async function LeftSidebar() {
  return (
    <div className="flex justify-between flex-col h-full w-full items-center p-2">
      <div className="space-y-4 w-full">
        <div className="flex flex-col gap-2 w-full justify-start">
          {navData.map((item) => (
            <NavItem title={item.title} icon={item.icon} key={item.id} />
          ))}
        </div>
        <Button
          variant={"ghost"}
          size={'btn'}
          className="w-full lg:max-w-full max-w-fit rounded-full bg-blue-500"
        >
          <Label className="lg:inline-block hidden text-lg">Post</Label>
          <Image 
          src={ximg}
          alt="post"
          width={25}
          height={25}
          className=" lg:hidden inline-block rounded-full overflow-hidden mix-blend-multiply"
          />
        </Button>
      </div>
      <Button variant={"ghost"} size={'btn'} className="w-full lg:max-w-full max-w-fit flex justify-between rounded-full">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="profile" />
            <AvatarFallback>PF</AvatarFallback>
          </Avatar>
          <div className="lg:flex flex-col hidden">
            <Label className=" uppercase">ressann</Label>
            <Label className=" font-extralight">@ressann</Label>
          </div>
        </div>
          <MdMoreHoriz className="text-2xl lg:inline-block hidden"/>
      </Button>
    </div>
  );
}
