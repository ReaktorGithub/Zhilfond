import styles from './styles.module.scss';

const selectedProfileId: string | null = '';

const Profile = () => {
	return (
		<div className={styles.root}>
			{
				selectedProfileId === null ?
					<div className={styles.notSelected}>
						<p className={styles.textRegular}>Выберите сотрудника, чтобы посмотреть его профиль</p>
					</div> :
					<div className={styles.profile}>
						<div
							className={styles.imageBox}
							style={{
								backgroundImage: `url(/images/empty.png)`,
							}}
						/>
						<div className={styles.profileBox}>
							<div className={styles.profileDetailsBox}>
								<p className={styles.textHeading}>Ervin Howell</p>
								<p className={styles.textDetails}><span className={styles.textBold}>email:</span>&nbsp;&nbsp;Shanna@melissa.tv</p>
								<p className={styles.textDetails}><span className={styles.textBold}>phone:</span>&nbsp;&nbsp;010-692-6593 x09125</p>
							</div>
							<div className={styles.profileAboutBox}>
								<p className={styles.textHeading}>О себе:</p>
								<p className={styles.textDetails}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							</div>
						</div>
					</div>
			}
		</div>
	);
};

export default Profile;

