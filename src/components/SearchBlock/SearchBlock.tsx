import styles from './styles.module.scss';
import {FC} from "react";
import CustomInput from "../ui/CustomInput";
import SearchResult from "../SearchResult";
import {useCalculateHeight} from "../../hooks/useCalculateHeight";
import useAppSelector from "../../hooks/useAppSelector";
import SearchStatus from "../SearchStatus";
import useSearchUsers from "../../hooks/useSearchUsers";

const SearchBlock: FC = () => {
	const users = useAppSelector(state => state.app.users);
	const searchValue = useAppSelector(state => state.app.search);
	const userId = useAppSelector(state => state.app.selectedUserId);
	const loading = useAppSelector(state => state.app.loading);

	const { rootRef, rootHeight } = useCalculateHeight();

	const { onSelectUser, onChangeValue } = useSearchUsers();

	return (
		<div className={styles.root} ref={rootRef}>
			<div className={styles.blockSearch}>
				<p className={styles.headingText}>Поиск сотрудников</p>
				<CustomInput
					value={searchValue}
					onChange={onChangeValue}
					placeholder='Введите Id или имя'
				/>
			</div>
			<div className={styles.blockResult}>
				<div className={styles.resultTextBox}>
					<p className={styles.headingText}>Результаты</p>
					<SearchStatus />
				</div>
				<div
					className={styles.scrollBox}
					style={{ maxHeight: rootHeight - 181 + 'px' }}
				>
					{
						!loading && users.map((user) => <SearchResult
							key={user.id}
							name={user.name}
							email={user.email}
							selected={userId === user.id}
							onClick={() => onSelectUser(user.id)}
						/>)
					}
				</div>
			</div>
		</div>
	);
};

export default SearchBlock;

