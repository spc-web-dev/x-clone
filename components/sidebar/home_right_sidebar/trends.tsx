import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { trendingData } from "@/lib/data";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function Trends(){
    return (
        <Card className='w-full'>
            <CardHeader>
                <CardTitle className="text-xl">Trends for you</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                { trendingData.map(trend=>(
                    <div className="flex justify-between items-center w-full" key={trend.topic}>
                        <div>
                            <CardDescription>{trend.category}</CardDescription>
                            <CardTitle className="text-sm">{trend.topic}</CardTitle>
                            {trend.postCount > 0 && <CardDescription>{trend.postCount} posts</CardDescription>}
                        </div>
                        <Button variant={'ghost'} size={'btn'} className=" rounded-full text-xl hover:text-blue-500">
                            <HiOutlineDotsHorizontal />
                        </Button>
                    </div>
                ))}
            </CardContent>
            <CardFooter>
                <Button variant={'ghost'} className="text-blue-500">Show more</Button>
            </CardFooter>
        </Card>
    )
}