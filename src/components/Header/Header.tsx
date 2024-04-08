import styles from './styles.module.scss';

const Header = () => {
	return (
		<div className={styles.root}>
			<h1>Жилфонд</h1>
			<a href='/' className={styles.link}>Пользователь</a>
		</div>
	);
};

export default Header;

