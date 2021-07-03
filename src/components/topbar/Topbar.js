import './topbar.css'

const topbar = () => {
	return (
		<div className='top'>
			<div className='topLeft'>
				<i className='topIcon fab fa-facebook-square'></i>
				<i className='topIcon fab fa-instagram-square'></i>
				<i className='topIcon fab fa-pinterest-square'></i>
				<i className='topIcon fab fa-twitter-square'></i>
			</div>
			<div className='topCenter'>
				<ul className='topList'>
					<li className='topListItem'>
						<li className='link' to='/'>
							HOME
						</li>
					</li>
					<li className='topListItem'>ABOUT</li>
					<li className='topListItem'>CONTACT</li>
					<li className='topListItem'>
						<li className='link' to='/write'>
							WRITE
						</li>
					</li>
					<li className='topListItem'>LOGOUT</li>
				</ul>
			</div>
			<div className='topRight'>Search</div>
		</div>
	)
}

export default topbar
