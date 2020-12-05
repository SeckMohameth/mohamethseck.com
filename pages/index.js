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
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>

        <p><Link href="/posts/first-post"><a>Resume</a></Link></p>
        <p>My Projects <Link href="/posts/first-post"><a>Here</a></Link></p>
        <p>My Blogs Posts <Link href="/posts/first-post"><a>Here</a></Link></p>
        <p>UX/UI - case studies and side projects <Link href="/posts/first-post"><a>Here</a></Link></p>
        <br />
        <p>Put contact section with just your email and all your social media links. Also show media and podcast you were in</p>

      </section>
    </Layout>
  )
}