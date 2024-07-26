
import { Button } from "../ui/button";
import { Label } from "../ui/label";

type Props = {
    title?: string,
    icon?: React.ReactNode,
}

function NavItem({ title, icon }: Props) {
  return (
    <Button variant={'ghost'} size={'btn'} className="max-w-fit rounded-full flex gap-4">
        <span className={`text-2xl`}>
            {icon}
        </span>
        {title !== '' && <Label className="text-lg lg:inline-block hidden">{title}</Label>}
    </Button>
  )
}

export default NavItem