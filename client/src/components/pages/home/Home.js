import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from '../../header/Header'
import Posts from '../../posts/Posts'
import SideBar from '../../sidebar/SideBar'
import './Home.css'

const Home = () => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get('/posts')
			setPosts(res.data)
			// console.log(res)
		}
		fetchPosts()
	}, [])
	return (
		<>
			<Header />
			<div className='home'>
				<Posts posts={posts} />
				<SideBar />
			</div>
		</>
	)
}

export default Home
