import styles from "../styles/Projects.module.css";
import ProjectItem from "./ProjectItem";

export default function Projects() {
	const SNAKE_URL = "https://eberber01.github.io/snake/";
	const QUILTIFY_URL = "https://main.d3ftg3vbkuts3x.amplifyapp.com/";
	const AGORAPHOBIA_URL =
		"https://users.csc.calpoly.edu/~eberbern/FinalProject.html";
	const DINO_URL = "https://github.com/eberber01/image-generator"

	return (
		<div className={styles.container} id="projects">
			<h1>Projects</h1>
			<div className={styles.grid}>
				<ProjectItem title="Quiltify" href={QUILTIFY_URL}>
					Spotify API Integrated application that displays users top
					artists, built using AWS lambda functions
				</ProjectItem>
				<ProjectItem title="Snake" href={SNAKE_URL}>
					Vanilla JavaScript game using HTML canvas
				</ProjectItem>
				<ProjectItem title="Agoraphobia" href={AGORAPHOBIA_URL}>
					Team developed short story game
				</ProjectItem>
				<ProjectItem title="Image Generator" href={DINO_URL}>
					Python-based tool designed to create composite images by layering different components 
				</ProjectItem>
			</div>
		</div>
	);
}
