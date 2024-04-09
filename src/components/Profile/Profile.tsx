import styles from './styles.module.scss';
import {FC} from "react";
import useAppSelector from "../../hooks/useAppSelector";
import {userProfileSelector} from "../../store/selectors";

const Profile: FC = () => {
	const user = useAppSelector(userProfileSelector);

	return (
		<div className={styles.root}>
			{
				user ?
					(
						<div className={styles.profile}>
							<div
								className={styles.imageBox}
								style={{
									backgroundImage: `url(/images/empty.png)`,
								}}
							/>
							<div className={styles.profileBox}>
								<div className={styles.profileDetailsBox}>
									<p className={styles.textHeading}>{user.name}</p>
									<p className={styles.textDetails}><span className={styles.textBold}>email:</span>&nbsp;&nbsp;{user.email}</p>
									<p className={styles.textDetails}><span className={styles.textBold}>phone:</span>&nbsp;&nbsp;{user.phone}</p>
								</div>
								<div className={styles.profileAboutBox}>
									<p className={styles.textHeading}>О себе:</p>
									<p className={styles.textDetails}>{user.about}</p>
								</div>
							</div>
						</div>
					) : (
						<div className={styles.notSelected}>
							<p className={styles.textRegular}>Выберите сотрудника, чтобы посмотреть его профиль</p>
						</div>
					)
			}
		</div>
	);
};

export default Profile;

