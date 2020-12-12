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
        <p>Hello, I'm Mohameth. I'm a Software Engineer and self taught inventor. I enjoy working on both the frontend and backend for both mobile and web applications. 
          I have a strong interest for design and overall product development. 
        </p>
        {/* <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p> */}

        <p><Link href="/projects/first-post"><a>Resume</a></Link></p>
        <p>My Projects <Link href="/projects/first-post"><a>Here</a></Link></p>
        <p>UX/UI - Spotify case study <a href="https://medium.com/@mohamethseck/putting-myself-in-the-designers-shoes-ui-ux-698bbe0f02ef" target="_blank"><a>Here</a></a></p>
        <br />
        <p>Podcast: <Link href="/podcast/podcast-ep"><a>Listen Here!</a></Link></p>
        <p>Put contact section with just your email and all your social media links. Also show media and podcast you were in</p>

      </section>
    </Layout>
  )
}