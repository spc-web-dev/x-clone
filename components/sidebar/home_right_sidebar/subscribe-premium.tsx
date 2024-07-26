import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function SubscribePremium (){
    return (
        <Card className="w-full rounded-xl">
            <CardHeader className="pb-1 pt-2">
                <CardTitle className="text-xl">Subscribe to Premium</CardTitle>
            </CardHeader>
            <CardContent className="py-0">
                <CardDescription>
                    Subscribe to unlock new features and if eligible, receive a share of ads revenue.
                </CardDescription>
            </CardContent>
            <CardFooter className="py-2">
                <Button variant={'ghost'} className=" rounded-full bg-blue-500">Subscribe</Button>
            </CardFooter>
        </Card>
    )
}