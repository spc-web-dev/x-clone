import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { userProfileData } from "@/lib/data";
import Image from "next/image";

export default function WhoToFollow() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">Trends for you</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {userProfileData.map((user) => (
          <div
            className="flex justify-between items-center w-full"
            key={user.id}
          >
            <div className="flex gap-2 items-center">
              <Image
                src={user.profile || "https://github.com/shadcn.png"}
                alt="user profile"
                width={40}
                height={40}
                className=" rounded-full object-cover"
              />
              <div>
                <CardTitle className="text-sm">{user.username}</CardTitle>
                <CardDescription>{user.id}</CardDescription>
              </div>
            </div>
            <Button variant={"secondary"} className="rounded-full">
              Follow
            </Button>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button variant={"ghost"} className="text-blue-500">
          Show more
        </Button>
      </CardFooter>
    </Card>
  );
}
