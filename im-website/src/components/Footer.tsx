import { RedesSociais} from "./ui/redes-sociais";
import { FullLogo } from "./ui/full-logo"
import { FooterLinks } from "./ui/footer-links"
import { NewsletterSubscribe } from "./ui/newsletter-subscribe"

export function Footer () {
  return (
    <div className="flex justify-evenly py-6 items-center sticky bottom-0 bg-neutral-950">
      <FullLogo />
      <FooterLinks />
      <NewsletterSubscribe />
      <RedesSociais />
    </div>
  )
}