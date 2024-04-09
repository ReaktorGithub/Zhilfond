import styles from './styles.module.scss';
import {FC} from "react";

const Header: FC = () => {
	return (
		<div className={styles.root}>
			<h1>Жилфонд</h1>
			<a href='/' className={styles.link}>Пользователь</a>
		</div>
	);
};

export default Header;

