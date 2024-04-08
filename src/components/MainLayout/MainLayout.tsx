import styles from './styles.module.scss';
import SearchBlock from "../SearchBlock";
import Profile from "../Profile";

const MainLayout = () => {
	return (
		<div className={styles.root}>
			<SearchBlock />
			<div className={styles.divider}/>
			<Profile />
		</div>
	);
};

export default MainLayout;
