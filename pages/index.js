import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import utilStyle from '../styles/utils.module.css';
import Link from 'next/link';
import { getPostsData } from '../lib/post';
import { siteTitle } from '../components/Layout';

// SSGの場合
export async function getStaticProps() {
	const allPostData = getPostsData();
	console.log(allPostData);
	return {
		props: {
			allPostData,
		},
	};
}

// SSGの場合
// export async function getServerSideProps(context) {
// 	return {
// 		props: {
// 			// コンポーネントに渡すためのprops
// 		},
// 	};
// }

export default function Home({ allPostData }) {
	return (
		<Layout home>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyle.headingMd}>
				<p>
					私はフロントエンジニアをしているマサトです。JavaScriptのフレームワークを使用した開発を行っています。
				</p>
			</section>
			<section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
				<h2>エンジニアブログ</h2>
				<div className={styles.grid}>
					{allPostData.map(({ id, date, title, thumbnail }) => (
						<article key={id}>
							<Link href={`/posts/${id}`} legacyBehavior>
								<img src={`${thumbnail}`} className={styles.thumbnailImage} />
							</Link>
							<Link href={`/posts/${id}`} legacyBehavior>
								<a className={utilStyle.boldText}>{title}</a>
							</Link>
							<br />
							<smal className={utilStyle.lightText}>{date}</smal>
						</article>
					))}
				</div>
			</section>
		</Layout>
	);
}
