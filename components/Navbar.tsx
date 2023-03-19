import styles from '../styles/Navbar.module.css'
export default function Navbar(){
    const GITHUB_URL = 'https://github.com/eberber01'
    return(
        <>
        <nav className={styles.navbar}>

        <h1 className={styles.title}>unbearable.dev</h1>
        <ul className={styles.navlist}>
            <li>
                Home
            </li>
            <li>
                Projects
            </li>
            <li className={styles.navitem}>
                <a href={GITHUB_URL} target='_blank'>

                    <img height="40" src="./github-mark-white.svg"/>

                </a>
                
            </li>
        </ul>
        </nav>
        </>
    )
}