import Image from '../assets/bcs.png'
import Play from '../assets/play.svg'
import Info from '../assets/info.svg'

const Billboard = () => {
	return (
		<section className="billboard">

			<div className="content">
				<img src={ Image } alt="" />

				<p className="desc">
					Ex-con artist Jimmy McGill turns into a small-time attorney and goes through a series of trials and tragedies, as he transforms into his alter ego Saul Goodman, a morally challenged criminal lawyer.
				</p>

				<div className="btns">
					<button>
						<img src={ Play } alt="" />
						Play
					</button>
					<button>
						<img src={ Info } alt="" />
						More info
					</button>
				</div>
			</div>

		</section>
	)
}

export default Billboard