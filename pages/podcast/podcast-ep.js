import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import ReactPlayer from "react-player"


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

        <iframe src="https://open.spotify.com/embed-podcast/show/7vbLGoJePsVnvkRCOeZqiO" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

        <iframe src="https://open.spotify.com/embed-podcast/episode/0XbJ5VCxJ1IzcqE7F9MeS4" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

        <iframe src="https://open.spotify.com/embed-podcast/episode/2PuyrwXogA1iQ7MF3iU4Vz" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>


        <h3>Link to video of the podcast on <a href="https://fb.watch/2kVkLlwPlP/" target="_blank">FaceBook</a></h3>
        <ReactPlayer url="https://soundcloud.com/new-haven-independent/nhv-innovation-podcast-hoberton-school?in=new-haven-independent/sets/nhv-innovative-podcast"/>

        </Layout>
        </>
    )
}