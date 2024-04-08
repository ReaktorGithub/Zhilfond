import styles from './styles.module.scss';
import {ChangeEvent, useState} from "react";
import CustomInput from "../ui/CustomInput";
import SearchResult from "../SearchResult";

const SearchBlock = () => {
	const [value, setValue] = useState<string>('');

	const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	}

	return (
		<div className={styles.root}>
			<div className={styles.blockSearch}>
				<p className={styles.headingText}>Поиск сотрудников</p>
				<CustomInput
					value={value}
					onChange={handleChangeValue}
					placeholder='Введите Id или имя'
				/>
			</div>
			<div className={styles.blockResult}>
				<p className={styles.headingText}>Результаты</p>
				{/*<p className={styles.regularText}>начните поиск</p>*/}
				<SearchResult />
				<SearchResult selected/>
			</div>
		</div>
	);
};

export default SearchBlock;

