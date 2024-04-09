import styles from './styles.module.scss';
import {FC} from "react";
import cn from 'classnames';

interface IProps {
	selected?: boolean;
	name: string;
	email: string;
	onClick: () => void;
}

const SearchResult: FC<IProps> = ({ selected = false, name, email, onClick }) => {
	return (
		<div
			className={cn(styles.root, {[styles.root_selected]: selected})}
			onClick={onClick}
		>
			<div
				className={styles.imageBox}
				style={{
					backgroundImage: `url(/images/empty-small.png)`,
				}}
			/>
			<div className={cn(styles.dataBox, {[styles.dataBox_selected]: selected})}>
				<p className={styles.textHeading}>{name}</p>
				<p className={styles.textDetails}>{email}</p>
			</div>
			<div className={cn(styles.selectedBox, {[styles.selectedBox_visible]: selected})}/>
		</div>
	);
};

export default SearchResult;

