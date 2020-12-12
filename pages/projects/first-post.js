import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
    return ( 
    <>
    <Layout>
        <Head>
            <title>Projects</title>
        </Head>
        <h1>Projects</h1>
        <p>The links below will open a window to the GitHub repos along with a README detailing the project. Some projects will have an url taking you to the live site.</p>
        <br />
            <p>Final Holberton Project:  <Link href="https://github.com/SeckMohameth/hopeful-cosmos">Hopeful Cosmos</Link></p>
            <p>Video sharing app:  <Link href="https://github.com/SeckMohameth/VRS-2020" >VRS (Currently developing)</Link></p>
            <p>Vers: <Link href="https://github.com/SeckMohameth/Vers-2016-2019" >2016 - 2019 project</Link></p>

    </Layout>
    </>
    )
}