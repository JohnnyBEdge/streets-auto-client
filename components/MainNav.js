import Link from 'next/link'
import styles from '../styles/MainNav.module.css'
import Image from 'next/image'

const MainNav = () => {

    return (
        <nav className={styles.container}>
            <div className="logoContainer">
                <Link href="/">
                    <a>
                    <Image 
                        src="/images/logo.jpg"
                        alt="Streets Auto main logo"
                        width={100}
                        height={100}/>
                    </a>
                </Link>
            </div>
            <div className="linkContainer">
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/inventory">
                    <a>Inventory</a>
                </Link>
                <Link href="/gallery">
                    <a>Gallery</a>
                </Link>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </div>
        </nav>
    )
}
export default MainNav;
