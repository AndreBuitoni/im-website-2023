import { RedesSociais} from "./redes-sociais";
import { FullLogo } from "./full-logo"
import { FooterLinks } from "./footer-links"
import { NewsletterSubscribe } from "./newsletter-subscribe"

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