import Image from 'next/image'
import { ArrowDownRight, ArrowUpRight, Cog } from 'lucide-react'
import { CatalogSections } from '@/components/catalog-sections'

export default function Page() {
  return <><header><div className="wrap bar"><a className="brand" href="#top"><Cog aria-hidden="true"/><span>CRAZY MIKE&apos;S<small>AUTO REPAIR &amp; ACCESSORIES</small></span></a><nav aria-label="Main navigation"><a href="#offer">What we offer</a><a href="#pricing">Pricing</a><a className="contact" href="#contact">Contact <ArrowUpRight size={15}/></a></nav></div></header><main id="top"><section className="wrap hero"><div><div className="label"><i/> WHOLESALE AUTO PARTS</div><h1>Crazy Mike&apos;s<span>Auto Repair &amp;<br/>Accessories</span></h1><p>Quality automotive repair parts and accessories, wholesale, at the cheapest prices around — built for shops, mechanics, and resellers.</p><a className="cta" href="#pricing">View wholesale pricing <ArrowDownRight size={17}/></a></div><figure><Image src="/brake-assembly.png" alt="Technical illustration of a disc brake assembly" width={800} height={640} priority/><figcaption>FIG. 01 <b>/</b> DISC BRAKE ASSEMBLY</figcaption></figure></section><CatalogSections/></main></>
}
