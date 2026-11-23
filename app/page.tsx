import Image from 'next/image'
import { Aperture, ArrowUpRight } from 'lucide-react'
import { FieldNote } from '@/components/field-note'

export default function Page() {
 return <main className="journal"><header><a href="#" className="brand"><Aperture aria-hidden="true" size={27}/> Stillfield</a><nav aria-label="Main"><a href="#journal">Journal</a><a href="#about">About <ArrowUpRight size={13}/></a></nav></header>
 <article id="journal"><div className="intro"><div className="kicker"><i/> FIELD JOURNAL <span>/</span> VOL. 01</div><h1>Where the land ends.</h1><p>A visual field note from the edge of the California coast.</p></div>
 <figure><div className="photo"><Image src="/coast.png" alt="Layers of coastal cliffs receding into peach-colored haze above the Pacific" fill priority sizes="(max-width: 1200px) 92vw, 1180px"/><div className="plate">FIG. 001</div></div><figcaption><b>01</b><strong>Big Sur, California</strong><span>36.27° N &nbsp; 121.81° W</span></figcaption></figure><FieldNote/></article><footer id="about"><div className="kicker">ABOUT STILLFIELD</div><p>An independent visual journal of landscapes, light, and the details worth stopping for.</p><small>Stillfield &nbsp; / &nbsp; Volume 01</small></footer></main>
}
