import styles from "../styles/Projects.module.css";
import ProjectItem from "./ProjectItem";

export default function Projects() {
	const SNAKE_URL = "https://eberber01.github.io/snake/";
	const QUILTIFY_URL = "https://eberber01.github.io/Quiltify/";

	return (
		<div className={styles.container} id="projects">
			<h1>Projects</h1>
			<div className={styles.grid}>
				<ProjectItem title="Quiltify" href={QUILTIFY_URL}>
					Spotify API Integrated application that displays users top
					artists, built using AWS lambda functions
				</ProjectItem>
				<ProjectItem title="Snake" href={SNAKE_URL}>
					Vanilla JavaScript game with HTML canvas
				</ProjectItem>
			</div>
		</div>
	);
}
