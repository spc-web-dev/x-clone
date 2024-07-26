import BottomSidebar from "@/components/layout/bottom-sidebar";
import LeftSidebar from "@/components/layout/left-sidebar";
import HomeRightSidebar from "@/components/layout/home-right-sidebar";
import HomeNavbar from "@/components/layout/home-navbar";

type Props = {
  children: React.ReactNode;
  params: {
    rootId: string;
  };
};

function Layout({ children, params }: Props) {
  return (
    <div className="sm:grid sm:place-items-center">
      <div className="flex gap-2 xl:w-[1250px] md:w-[80%] w-full justify-between">
        <div className="min-h-screen max-h-screen sm:block hidden lg:w-[260px] w-fit sticky top-0">
          <LeftSidebar />
        </div>
        <main className="lg:max-w-[600px] border-x w-full">
          {params.rootId[0] === 'home' && <HomeNavbar>
            {children}
          </HomeNavbar>}
        </main>
        <div className="min-h-screen w-[350px] sticky top-0 xl:block hidden">
          <HomeRightSidebar />
        </div>
      </div>
      <div className="sm:hidden flex w-full px-5 py-2 fixed bottom-0 bg-[rgba(0,0,0,0.2)] backdrop-blur-sm border-t">
        <BottomSidebar />
      </div>
    </div>
  );
}

export default Layout;
