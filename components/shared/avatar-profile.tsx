import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Props = {
    src: string,
    fallback?: string,
    alt: string,
}

function AvatarProfile({ src , fallback , alt }: Props) {
  return (
    <Avatar>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallback || 'CN'}</AvatarFallback>
    </Avatar>
  );
}

export default AvatarProfile;
