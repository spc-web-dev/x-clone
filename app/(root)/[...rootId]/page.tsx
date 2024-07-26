import Following from "@/components/home/following"
import ForYou from "@/components/home/for-you"


type Props = {
  params: {
    rootId: string,
  }
}

function page({ params }: Props ) {
  if(params.rootId[0] === 'home')
    return (<>
      <ForYou/>
      <Following />
    </>
    )
}

export default page