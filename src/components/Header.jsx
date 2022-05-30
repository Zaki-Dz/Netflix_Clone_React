import Logo from '../assets/logo.png'
import SecNav from './SecNav'

const Header = () => {
	const navItems = [
		'Home',
		'TV Show',
		'Movies',
		'New & Popular',
		'My List'
	]

	return (
		<header>
			<img src={ Logo } className='logo' alt="Logo" />

			<nav>
				<ul>
					{ navItems.map(item => <li>{ item }</li>) }
				</ul>
			</nav>

			<SecNav />
		</header>
	)
}

export default Header