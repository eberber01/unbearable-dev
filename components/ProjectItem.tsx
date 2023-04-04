import styles from "../styles/ProjectItem.module.css";

export default function ProjectItem(props: any) {
	return (
		<div className={styles.container}>
			<a className={styles.title} href={props.href} target="_blank">
				{props.title}
			</a>
			<p className={styles.text}>{props.children}</p>
		</div>
	);
}
