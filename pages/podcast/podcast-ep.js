import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function Podcast() {
    return(
        <>
        <Layout>
        <Head>
            <title>Podcast</title>
        </Head>
        <h1>Podcast</h1>
        <p>Here are some podcasts I've been a part of. I also have a podcast of my own called MO++</p>
        <br/>

        <iframe src="https://open.spotify.com/embed-podcast/episode/0XbJ5VCxJ1IzcqE7F9MeS4" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

        <iframe src="https://open.spotify.com/embed-podcast/episode/2PuyrwXogA1iQ7MF3iU4Vz" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

        <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FNewHavenIndependent%2Fvideos%2F2428012144143501%2F&show_text=false&width=560" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>    </Layout>
        </>
    )
}