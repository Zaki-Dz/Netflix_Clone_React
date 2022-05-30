import FacebookIcon from '../assets/facebook.svg'
import YoutubeIcon from '../assets/youtube.svg'
import TwitterIcon from '../assets/twitter.svg'
import InstagramIcon from '../assets/Instagram.svg'

const SocialLinks = () => {
	return (
		<ul className="social-links">
			<li className="social-link">
				<img src={ FacebookIcon } alt="" />
			</li>

			<li className="social-link">
				<img src={ InstagramIcon } alt="" />
			</li>

			<li className="social-link">
				<img src={ TwitterIcon } alt="" />
			</li>

			<li className="social-link">
				<img src={ YoutubeIcon } alt="" />
			</li>
		</ul>
	)
}

export default SocialLinks