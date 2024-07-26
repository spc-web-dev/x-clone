import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

type Props = {
    children: React.ReactNode,
}

export default function HomeNavbar({ children }: Props){
    return (
        <nav className="">
            <Tabs defaultValue="for_you" className="h-full w-full">
                <TabsList className="flex border bg-transparent backdrop-blur-sm py-8 rounded-none sticky top-0 px-0 z-[100]">
                    <TabsTrigger className="flex-1" value="for_you" asChild>
                        <Button variant={'ghost'} className="py-8 rounded-none data-[state=active]:after:inline-block after:absolute after:rounded-full after:hidden relative after:bottom-0 after:w-14 after:h-1 after:bg-blue-500 data-[state=active]:bg-transparent">For you</Button>
                    </TabsTrigger>
                    <TabsTrigger className="flex-1" value="following" asChild>
                        <Button variant={'ghost'} className="py-8 rounded-none data-[state=active]:after:inline-block after:absolute after:rounded-full after:hidden relative after:bottom-0 after:w-14 after:h-1 after:bg-blue-500 data-[state=active]:bg-transparent">Following</Button>
                    </TabsTrigger>
                </TabsList>
                {children}
            </Tabs>
        </nav>
    )
}