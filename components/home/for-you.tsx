import PostCard from "../shared/post-card";
import { TabsContent } from "../ui/tabs";
import HomeHeaderPostOption from "./home-header-post-option";

function ForYou() {
  return (
    <TabsContent value="for_you" className=" divide-y">
      <HomeHeaderPostOption />
      <div className="py-2 divide-y space-y-2">
        {Array.from({ length: 10 }).map((_, index) => (
          <PostCard
            userId="@net_got"
            descriptions={"The god is coming..........."}
            photo={""}
            width={240}
            height={240}
            comments={10}
            repost={5}
            likes={100}
            views={1000}
            key={index}
          />
        ))}
      </div>
    </TabsContent>
  );
}

export default ForYou;
