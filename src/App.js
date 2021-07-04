import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from '../src/components/pages/home/Home'
import Login from './components/pages/login/Login'
import Register from './components/pages/register/Register'
import Write from './components/pages/write/Write'
import Topbar from './components/topbar/Topbar'
import Settings from './components/pages/settings/Settings'
import Single from './components/pages/single/Single'

const App = () => {
	const user = true
	return (
		<Router>
			<Topbar />
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/register'>{user ? <Home /> : <Register />}</Route>
				<Route path='/login'>{user ? <Home /> : <Login />}</Route>
				<Route path='/write'>{user ? <Write /> : <Register />}</Route>
				<Route path='/settings'>{user ? <Settings /> : <Register />}</Route>
				<Route path='/post/:postId'>
					<Single />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
