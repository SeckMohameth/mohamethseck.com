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
        <p>The links below will open a window to the GitHub repos along with a README detailing the project. Some project READMEs will have an url taking you to the live site.</p>
        <br />
            <p>Final Holberton Project:  <a href="https://github.com/SeckMohameth/hopeful-cosmos" target="_blank">Hopeful Cosmos</a></p>
            <p>Video sharing app:  <a href="https://github.com/SeckMohameth/VRS-2020" target="_blank">VRS (Currently developing)</a></p>
            <p>Vers: <a href="https://github.com/SeckMohameth/Vers-2016-2019" target="_blank">2016 - 2019 project</a></p>

            <p>Jambar/Sene - Freelancing site: <a href="https://github.com/SeckMohameth/Sene" target="_blank">Github Repo</a> Will turn it into something else maybe (Heads up, NOT responsive 😅)</p>
            <ul>
                <li><a href="https://jambar.vercel.app/">Live site</a></li>
            </ul>

            <p>Netflix Clone: <a href="https://github.com/SeckMohameth/netflix-clone-React-Frontend" target="_blank">Frontend w/React.js</a></p>
            <p>Journal (EJS, Node, express, bootstrap): <a href="https://github.com/SeckMohameth/Journal" target="_blank">Project</a></p>
            <p>Authentication: <a href="https://github.com/SeckMohameth/Authentication-Secrets" target="_blank">Secrets</a></p>

            <p>Notes App: <a href="https://github.com/SeckMohameth/Keeper-App" target="_blank">Built w/React.js</a></p>
            <p>ToDoList (gotta have one of those): <a href="https://github.com/SeckMohameth/ToDoList" target="_blank">Project</a></p>
            <p>University of Hartford: <a href="https://github.com/SeckMohameth/UHart-Web-Dev-Portfolio" target="_blank">Web Dev Class</a></p>

            <hr />
            <p>You can find more repos I worked on throughout the course of my studies at Holberton School. Code there shows task we worked on using C, Python, and Javascript.</p>

    </Layout>
    </>
    )
}