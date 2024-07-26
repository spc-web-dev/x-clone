'use client'
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

type Props = {
  name: string;
  className?: string;
};

function ProfileNameHover({ name, className }: Props) {
    const [follow,setFollow]= useState(true)
    const [hover,setHover]= useState(false)

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant={"link"} className={className}>
          {name}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent asChild>
        <Card className="">
          <CardHeader className="flex flex-row justify-between p-0">
            <div>
              <Avatar className="w-14 h-14">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Button variant={"link"} className="p-0 font-bold">
                Net the god
              </Button>
              <CardDescription className="cursor-pointer">
                @net_god
              </CardDescription>
            </div>
            <div>
              <Button variant={"outline"} className={`rounded-full ${follow ? ' hover:border-red-500 hover:text-red-500': ''}`} onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
                {follow ? hover ? 'Unfollow': 'Following' : 'Follow' }
              </Button>
            </div>
          </CardHeader>
          <CardContent className="px-0 py-2">
            <CardDescription>
              VP of Product @Vercel . Helping developers build a faster web.
              Teaching about React and Next.js.
            </CardDescription>
          </CardContent>
          <CardFooter className="p-0">
            <Button variant={"link"} className="">
              100 <CardDescription className="pl-1">Following</CardDescription>
            </Button>
            <Button variant={"link"} className="">
              100 <CardDescription className="pl-1">Followers</CardDescription>
            </Button>
          </CardFooter>
        </Card>
      </HoverCardContent>
    </HoverCard>
  );
}

export default ProfileNameHover;
