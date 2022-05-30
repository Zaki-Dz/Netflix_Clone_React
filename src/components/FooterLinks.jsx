const FooterLinks = () => {
	const links = [
		'Audio and Subtitles',
		'Audio Description',
		'Help Center',
		'Gift Cards',
		'Media Center',
		'Investor Relations',
		'Jobs',
		'Terms of Use',
		'Privacy',
		'Legal Notices',
		'Cookie Preferences',
		'Impressum',
		'Contact Us',
	]

	return (
		<ul className="footer-links">
			{ links.map(link => <li className="footer-link">{ link }</li>) }
		</ul>
	)
}

export default FooterLinks