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

        <iframe src="https://open.spotify.com/embed-podcast/show/7vbLGoJePsVnvkRCOeZqiO" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

        <iframe src="https://open.spotify.com/embed-podcast/episode/0XbJ5VCxJ1IzcqE7F9MeS4" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

        <iframe src="https://open.spotify.com/embed-podcast/episode/2PuyrwXogA1iQ7MF3iU4Vz" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>


        <h3>Link to video of the podcast on <a href="https://fb.watch/2kVkLlwPlP/" target="_blank">FaceBook</a></h3>
        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/700159090&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/new-haven-independent" title="WNHH Community Radio" target="_blank" style="color: #cccccc; text-decoration: none;">WNHH Community Radio</a> · <a href="https://soundcloud.com/new-haven-independent/nhv-innovation-podcast-hoberton-school" title="NHV Innovation Podcast | Hoberton School" target="_blank" style="color: #cccccc; text-decoration: none;">NHV Innovation Podcast | Hoberton School</a></div>  


        </Layout>
        </>
    )
}