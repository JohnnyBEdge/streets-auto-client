import Head from 'next/head'
import MainNav from '../../components/MainNav'
import Image from 'next/image'
import styles from '../styles/About.module.css'


const contentful = require("contentful");

const client = contentful.createClient({
    space: process.env.SPACE,
    accessToken: process.env.ACCESS_TOKEN
});
export const getStaticProps = async () => {
    let data = await client.getEntries({
        content_type: 'aboutPage'
    });
    return {
        props: {
            aboutData: data.items,
            revalidate: 1
        }
    }
};

export default function About({aboutData}) {
    console.log("ABOUT DATA", ...aboutData)
    return (
        <div>
            <Head>
                <meta name="description" content="Information about Streets Auto." />
                <title>Streets Auto | About</title>
            </Head>
            
            <MainNav/>

            <section className="heroSection">
                <p>{aboutData[0].fields.heroImage.fields.file.url}</p>
                {/* <Image 
                    src={`https:${aboutData[0].fields.heroImage.fields.file.url}`}
                    width={100}
                    height={100}
                /> */}
            </section>

            <section className="aboutSection">
                <h1>Streets Auto</h1>
                <p className="mission">{aboutData[0].fields.missionStatement}</p>
                <p>replace this with shop image</p>
                <p className="aboutText">{aboutData[0].fields.aboutText}</p>
            </section>
            
            <section className="cardContainer">
                card container here
            </section>

            <section className="galleryLink">
                Gallery link here
            </section>

            <section className="contact">
                contact comonent here
            </section>

            <footer>
                Footer component here
            </footer>

        </div>
    )
}