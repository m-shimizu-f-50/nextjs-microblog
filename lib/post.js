import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const postDirectory = path.join(process.cwd(), 'posts');

// mdファイルのデータを取得する関数
export function getPostData() {
	const fileNames = fs.readdirSync(postDirectory);
	const allPostsData = fileNames.map((fileName) => {
		const id = fileName.replace(/\.md$/, ''); // ファイル名をIDとして使用

		// マークダウンファイルを文字列として読み取る
		const fullPath = path.join(postDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');

		const matterResult = matter(fileContents);

		// データをオブジェクトとして返す
		return {
			id,
			...matterResult.data, // フロントマターのデータを展開
		};
	});

	return allPostsData;
}

// getStaticPathsでreturnで使用するpathを取得する
export function getAllPostIds() {
	const fileNames = fs.readdirSync(postDirectory);
	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ''), // ファイル名をIDとして使用
			},
		};
	});

	/* returnの例
		[
			{
				params: {
				id:"first-post"
				}
			}
		]
	*/
}
