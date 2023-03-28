import styles from "../styles/Intro.module.css";

export default function Intro() {
	return (
		<div className={styles.intro} id="home">
			<img id={styles.matsumoto} src="./matsumoto.jpg" />
			<div className={styles.introabout}>
				<h2 className={styles.introtitle}> Hi, I'm Eric</h2>
				<p className={styles.introtext}>
					I am computer science student at <em>Cal Poly SLO</em>
				</p>
			</div>
		</div>
	);
}
