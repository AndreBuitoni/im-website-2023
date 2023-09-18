import FacebookIcon from "@/assets/redes-sociais-icons/facebook-icon.png";
import TwitterIcon from "@/assets/redes-sociais-icons/twitter-icon.png";
import YoutubeIcon from "@/assets/redes-sociais-icons/yt-icon.png";
import InstagramIcon from "@/assets/redes-sociais-icons/instagram-icon.png";
import { Link } from "react-router-dom";

export function RedesSociais() {
  return (
    <div className="w-auto self-center">
      <div className="w-full text-center p-2 mb-2 text-xl">
        <p className="font-bold">REDES SOCIAIS</p>
      </div>
      <div className="w-full flex gap-4 justify-center p-1">
        <Link to="http://youtube.com/@inglesmoleza" target="__blank">
          <img
            className="h-8 w-auto hover:cursor-pointer"
            src={YoutubeIcon}
            alt="Youtube Logo"
          />
        </Link>
        <Link to="http://twitter.com/InglesMoleza" target="__blank">
          <img
            className="h-8 w-auto hover:cursor-pointer"
            src={TwitterIcon}
            alt="Twitter Logo"
          />
        </Link>
        <Link to="http://facebook.com/ingles.moleza" target="__blank">
          <img
            className="h-8 w-auto hover:cursor-pointer"
            src={FacebookIcon}
            alt="Facebook Logo"
          />
        </Link>
        <Link to="http://instagram.com/ingles.moleza" target="__blank">
          <img
            className="h-8 w-auto hover:cursor-pointer"
            src={InstagramIcon}
            alt="Instagram Logo"
          />
        </Link>
      </div>
    </div>
  );
}
