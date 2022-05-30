import Thumbnail from '../assets/thumbnail.jpg'
import Right from '../assets/chevron-right-slider.svg'

const Segment = ({ title }) => {
	return (
		<div className="segment">
			<h3>
				{ title }
				<img src={ Right } alt="" />
			</h3>

			<div className="row">
				<div className="movies">
					<div className='next-btn'>
						<img src={ Right } alt="" />
					</div>

					<div className="movie">
						<img src={ Thumbnail } alt="" />
					</div>

					<div className="movie">
						<img src={ Thumbnail } alt="" />
					</div>

					<div className="movie">
						<img src={ Thumbnail } alt="" />
					</div>

					<div className="movie">
						<img src={ Thumbnail } alt="" />
					</div>

					<div className="movie">
						<img src={ Thumbnail } alt="" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Segment