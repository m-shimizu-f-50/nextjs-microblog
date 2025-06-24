import Link from 'next/link';

export default function Custom404() {
	return (
		<div>
			<h1>404 - ページが見つかりません</h1>
			<p>申し訳ありませんが、リクエストされたページは存在しません。</p>
			<p>
				<Link href='/'>ホームページに戻る</Link>
			</p>
		</div>
	);
}
