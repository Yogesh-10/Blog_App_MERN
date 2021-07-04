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
							Home
						</li>
					</li>
					<li className='topListItem'>About</li>
					<li className='topListItem'>Contact</li>
					<li className='topListItem'>
						<li className='link' to='/write'>
							Write
						</li>
					</li>
					<li className='topListItem'>Logout</li>
				</ul>
			</div>
			<div className='topRight'>Search</div>
		</div>
	)
}

export default topbar
