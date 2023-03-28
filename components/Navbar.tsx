import styles from "../styles/Navbar.module.css";
export default function Navbar() {
	const GITHUB_URL = "https://github.com/eberber01";

	return (
		<nav className={styles.navbar}>
			<ul className={styles.navlist}>
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
				<li className={styles.navitem}>
					<a href={GITHUB_URL} target="_blank">
						<img
							className={styles.githublogo}
							src="./github-mark-white.svg"
						/>
					</a>
				</li>
			</ul>
		</nav>
	);
}
