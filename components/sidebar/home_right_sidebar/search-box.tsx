'use client'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";
import { PersonStandingIcon } from "lucide-react";
import {  useState } from "react";

export default function SearchBox() {
    const [onSearch,setOnSearch]= useState(false)
  return (
    <Command className="w-full">
      <CommandInput placeholder="Search..." onValueChange={(e)=>{
        if(e === '') setOnSearch(false)
        else setOnSearch(true)
      }}
      />
      <CommandList className={`${onSearch ? 'block' : 'hidden'}`}>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          <CommandItem>
            <PersonStandingIcon className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
