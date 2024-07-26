'use client'
import { Button } from "../ui/button";
import { postOptionData } from "@/lib/data";
import AvatarProfile from "../shared/avatar-profile";
import Tiptap from "../shared/tip-tap";
import { useState } from "react";


function HomeHeaderPostOption() {
  const [inputText,setInputText] = useState('')
  const handlePost = ()=>{}
  return (
    <div className="p-3">
      <div className="flex w-full">
        <AvatarProfile src="https://github.com/shadcn.png" alt="profile" fallback="PF" />
        <div className=" w-full px-2">
          <Tiptap setInputText={setInputText}/>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="pl-10">
          {postOptionData.map((option) => (
            <Button
              variant={"ghost"}
              size={"btn"}
              className="rounded-full text-lg text-blue-500"
              key={option.id}
              title={option.title}
            >
              {option.icon}
            </Button>
          ))}
        </div>
        <Button className="bg-blue-500 rounded-full" variant={'ghost'} disabled={inputText === '' && true} onClick={handlePost}>Post</Button>
      </div>
    </div>
  );
}

export default HomeHeaderPostOption;
