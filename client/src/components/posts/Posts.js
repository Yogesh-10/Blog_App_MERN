import Post from '../post/Post'
import './Posts.css'

const Posts = ({ posts }) => {
	return (
		<div className='posts'>
			{posts.map((p, key) => (
				<Post key={key} post={p} />
			))}
		</div>
	)
}
export default Posts
