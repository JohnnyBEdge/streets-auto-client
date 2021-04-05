import Head from 'next/head'
import MainNav from '../../components/MainNav'

export default function About() {
    return (
        <div>
            <Head>
                <meta name="description" content="Information about Streets Auto." />
                <title>Streets Auto | About</title>
            </Head>
            
            <MainNav/>
                <h1>About</h1>
        </div>
    )
}