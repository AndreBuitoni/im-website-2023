import FacebookIcon from '@/assets/redes-sociais-icons/facebook-icon.png'
import TwitterIcon from '@/assets/redes-sociais-icons/twitter-icon.png'
import YoutubeIcon from '@/assets/redes-sociais-icons/yt-icon.png'
import InstagramIcon from '@/assets/redes-sociais-icons/instagram-icon.png'

export function RedesSociais () {
  return (
    <div className='w-auto self-center'>
      <div className='w-full text-center p-2 mb-2 text-xl'>
        <p className='font-bold'>REDES SOCIAIS</p>
      </div>
      <div className='w-full flex gap-4 justify-center p-1'>
        <img className='h-8 w-auto hover:cursor-pointer' src={YoutubeIcon} alt="Youtube Logo" />
        <img className='h-8 w-auto hover:cursor-pointer' src={TwitterIcon} alt="Twitter Logo" />
        <img className='h-8 w-auto hover:cursor-pointer' src={FacebookIcon} alt="Facebook Logo" />
        <img className='h-8 w-auto hover:cursor-pointer' src={InstagramIcon} alt="Instagram Logo" />
      </div>
    </div>
  )
}