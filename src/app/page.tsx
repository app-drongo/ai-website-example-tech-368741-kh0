import Hero from '@/components/sections/home/Hero'

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
    
      <section id="cta">
        <Cta />
      </section></>
  )
}
import Cta from '@/components/sections/home/Cta'