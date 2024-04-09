import styles from './styles.module.scss';
import SearchBlock from "../SearchBlock";
import Profile from "../Profile";
import {FC} from "react";

const MainLayout: FC = () => {
	return (
		<div className={styles.root}>
			<SearchBlock />
			<div className={styles.divider}/>
			<Profile />
		</div>
	);
};

export default MainLayout;
