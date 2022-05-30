import BillboardSettings from './BillboardSettings'
import Notifications from './Notifications'
import UserMenu from './UserMenu'
import Search from './Search'

const SecNav = () => {
	return (
		<div className='sec-nav'>
			<Search />

			<Notifications />

			<UserMenu />

			<BillboardSettings />
		</div>
	)
}

export default SecNav