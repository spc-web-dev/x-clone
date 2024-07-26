import { navMobileData } from "@/lib/data";
import NavItem from "../sidebar/nav-item";

export default function BottomSidebar(){
    return (<div className="flex justify-between w-full">
        {navMobileData.map(item=>(
            <NavItem key={item.id} icon={item.icon} title={item.title} />
        ))}
    </div>)
}