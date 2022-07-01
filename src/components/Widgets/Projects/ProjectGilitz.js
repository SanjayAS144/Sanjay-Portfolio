import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Exit from '../../Assets/Graphics/exit.svg'
import Arrow from '../../Assets/Graphics/arrow.svg'
import ProjectLayout from '../../Layouts/GilitzProjectLayout';

// Image Imports
import g1 from './../../Assets/Graphics/gilitz/g1.png';
import Playground3 from './../../Assets/Graphics/gilitz/g3.png';
import Playground4 from './../../Assets/Graphics/gilitz/g5.gif';
import Playground5 from './../../Assets/Graphics/gilitz/g4.gif';

const transition = { duration: 0.5, ease: 'easeInOut' }

const postVariants = {
	initial: { y: -5, opacity: 0 },
	enter: { y: 0, opacity: 1, transition },
	exit: { y: 5, opacity: 0, transition },
}
class ProjectGilitz extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<motion.div
				initial='exit'
				animate='enter'
				exit='exit'
				variants={postVariants}
				className='row project-page'
				style={{ justifyContent: 'center' }}>
				<div className='col-12' style={{ padding: '2em 0em' }}>
					<Link to='/'>
						<img className='project-page-icons ' src={Exit} alt='exit' />
					</Link>
				</div>

				<div className='col-5'>
					<h1>Playground</h1>
				</div>

				<div className='col-7'>
					<p>
						Gilitz is a HyperLocal Delivey application which can deliver any thing with in 40 - 60 min in banglore Region.
						Designed and Developed a native android application for
						a small startUp of 10 peopl called Gilitz using Java XML
						and Firebase as a Database.

					</p>
					<a
						href='https://play.google.com/store/apps/details?id=com.bmsit.gilitz&hl=en&gl=US'
						target='_blank'
						rel='noopener noreferrer'
						alt='live-site'>
						<button>
							Live Site
							<img className='project-page-icons ' src={Arrow} alt='Arrow' />
						</button>
					</a>
					
				</div>

				<div style={{ paddingTop: '5em' }}>
					<ProjectLayout
						key1={g1}
						key0={Playground3}
						key4={Playground4}
						key3={Playground5}
					/>
				</div>
			</motion.div>
		)
	}
}

export default ProjectGilitz
