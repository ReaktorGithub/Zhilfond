import styles from './styles.module.scss';
import useAppSelector from "../../hooks/useAppSelector";
import {FC} from "react";
import Loader from "../ui/Loader";

const SearchStatus: FC = () => {
	const loading = useAppSelector(state => state.app.loading);
	const users = useAppSelector(state => state.app.users);
	const searchValue = useAppSelector(state => state.app.search);

	if (loading) {
		return (
			<div className={styles.loaderBox}>
				<Loader />
			</div>
		);
	}

	if (users.length) {
		return null;
	}

	if (searchValue.trim() && !users.length) {
		return (
			<p className={styles.regularText}>ничего не найдено</p>
		);
	}

	return (
		<p className={styles.regularText}>начните поиск</p>
	);
};

export default SearchStatus;

