import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import utilStyle from '../styles/utils.module.css';
import Link from 'next/link';
``;

export default function Home() {
	return (
		<Layout>
			<section className={utilStyle.headingMd}>
				<p>
					私はフロントエンジニアをしているマサトです。JavaScriptのフレームワークを使用した開発を行っています。
				</p>
			</section>
			<section>
				<h2>エンジニアブログ</h2>
				<div>
					<article>
						<Link href='/'>
							<img src='/images/thumbnail01.jpg' />
						</Link>
						<Link href='/' legacyBehavior>
							<a>SSRとSSGの使い分けの場面はいつなのか？</a>
						</Link>
						<br />
						<small>February 23 2020</small>
					</article>
				</div>
			</section>
		</Layout>
	);
}
