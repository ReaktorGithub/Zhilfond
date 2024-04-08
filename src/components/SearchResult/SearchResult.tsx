import styles from './styles.module.scss';
import {FC} from "react";
import cn from 'classnames';

interface IProps {
	selected?: boolean;
}

const SearchResult: FC<IProps> = ({selected = false}) => {
	return (
		<div className={cn(styles.root, {[styles.root_selected]: selected})}>
			<div
				className={styles.imageBox}
				style={{
					backgroundImage: `url(/images/empty-small.png)`,
				}}
			/>
			<div className={cn(styles.dataBox, {[styles.dataBox_selected]: selected})}>
				<p className={styles.textHeading}>Bret</p>
				<p className={styles.textDetails}>Sincere@april.biz</p>
			</div>
			<div className={cn(styles.selectedBox, {[styles.selectedBox_visible]: selected})}/>
		</div>
	);
};

export default SearchResult;

