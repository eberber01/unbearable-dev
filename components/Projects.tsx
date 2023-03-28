import styles from "../styles/Projects.module.css";
import ProjectItem from "./ProjectItem";

export default function Projects() {
	return (
		<div className={styles.container} id="projects">
			<h1>Projects</h1>
			<div className={styles.grid}>
				<ProjectItem title="Quiltify">
					Spotify API Integrated application that displays users top
					artists, built using AWS lambda functions
				</ProjectItem>
				<ProjectItem title="Snake">
					Vanilla JavaScript game with HTML canvas
				</ProjectItem>
			</div>
		</div>
	);
}
