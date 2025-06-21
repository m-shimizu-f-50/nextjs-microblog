import Layout from '../../components/Layout';
import { getAllPostIds } from '../../lib/post';

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false, // falseの場合、指定されたパス以外は404ページを表示
	};
}

export default function Post() {
	return <Layout>動的ルーティング</Layout>;
}
