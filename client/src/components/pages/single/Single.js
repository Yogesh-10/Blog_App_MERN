import SideBar from '../../sidebar/SideBar'
import SinglePost from '../../singlepost/SinglePost'
import './Single.css'
const Single = () => {
	return (
		<div className='single'>
			<SinglePost />
			<SideBar />
		</div>
	)
}

export default Single
