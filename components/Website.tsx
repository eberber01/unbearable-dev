import styles from "../styles/Website.module.css";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Projects from "./Projects";

export default function Website() {
	return (
		<div className={styles.background}>
			<Navbar />
			<Intro />
			<Projects />
		</div>
	);
}
