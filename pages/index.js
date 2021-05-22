import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Mohameth. I'm a Full Stack Software Engineer and self taught inventor. I enjoy working on both the frontend and backend for both mobile and web applications. 
          I have a strong interest for design and overall product development. 
        </p>
        <p>Currently my focus is centered around web and mobile apps. I am also studying iOS development on the side and am enthusiastic about AR/VR. I have some experience using 
          a wide variety of design tools such as, Invision, Figma, Sketch, Framer and Adobe XD. UX design is also another field I'm looking to excel in.</p>

        <p><a href="https://drive.google.com/file/d/1TBHnU0pgCPD7tR02QoOzs4y0GrR6Lj-1/view?usp=sharing" target="_blank">Resume</a></p>
        <p>My Projects <Link href="/projects/first-post"><a>Here</a></Link></p>
        <p>Blog: <a href="https://medium.com/@mohamethseck" target="_blank"><a>Medium</a></a></p>
        <p>UX/UI - Spotify case study <a href="https://medium.com/@mohamethseck/putting-myself-in-the-designers-shoes-ui-ux-698bbe0f02ef" target="_blank"><a>Here</a></a></p>
        <p>Podcast: <Link href="/podcast/podcast-ep"><a>Listen Here!</a></Link></p>

        <p><a href="https://www.linkedin.com/in/mrseck/" target="_blank">LinkedIn</a>| <a href="https://twitter.com/seck_mohameth" target="_blank">Twitter</a>| <a href="https://github.com/SeckMohameth" target="_blank">GitHub</a>| <a href="https://www.instagram.com/m0ney.m0/" target="_blank">Instagram</a></p>

      </section>
    </Layout>
  )
}