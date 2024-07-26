import SearchBox from "../sidebar/home_right_sidebar/search-box";
import SubscribePremium from "../sidebar/home_right_sidebar/subscribe-premium";
import Trends from "../sidebar/home_right_sidebar/trends";
import WhoToFollow from "../sidebar/home_right_sidebar/who-to-follow";

export default async function HomeRightSidebar() {
  return (
    <div className="w-full py-2 space-y-4 max-h-screen sticky top-0  overflow-y-auto scrollbar-hide">
      <div className=" sticky top-2">
        <SearchBox />
      </div>
      <div>
        <SubscribePremium />
      </div>
      <div>
        <Trends />
      </div>
      <div>
        <WhoToFollow />
      </div>
    </div>
  );
}
