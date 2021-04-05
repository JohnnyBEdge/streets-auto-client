import Link from 'next/link'
import styles from '../styles/LandingNav.module.css'
import {BiPlay} from 'react-icons/bi'
import { useState } from 'react'

const LandingNav = () => {

    const [active, setActive] = useState('styles.hidden');

    const makeActive = () => {
        active === 'styles.hidden' ? setActive('styles.activated') : setActive('styles.hidden')
    };

    return (
        <nav className={styles.container}>
            <div className={styles.menuItem} >
                <BiPlay className={styles.select}/>
                <Link href="/about"><a>About</a></Link>
            </div>
            <div className={styles.menuItem}>
                <BiPlay className={styles.select}/>
                <Link href="/inventory"><a>Inventory</a></Link>
            </div>
            <div className={styles.menuItem}>
                <BiPlay className={styles.select}/>
                <Link href="/gallery"><a>Gallery</a></Link>
            </div>
            <div className={styles.menuItem}>
                <BiPlay className={styles.select}/>
            <   Link href="/contact"><a>Contact</a></Link>
            </div>
        </nav>
    )
}
export default LandingNav;
