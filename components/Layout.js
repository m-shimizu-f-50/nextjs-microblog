import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Masa Code';

export const siteTitle = 'Masa Code Blog';

function Layout({ children }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<header className={styles.header}>
				<img
					className={utilStyles.borderCircle}
					src='/images/profile.png'
					alt='Logo'
				/>
				<h1 className={utilStyles.heading2Xl}>{name}</h1>
			</header>
			<main>{children}</main>
		</div>
	);
}

export default Layout;
