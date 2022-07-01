import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Exit from '../../Assets/Graphics/exit.svg';
import Arrow from '../../Assets/Graphics/arrow.svg'
import ProjectLayout from '../../Layouts/flutterpackageproject';




const transition = { duration: 0.5, ease: 'easeInOut' }

const postVariants = {
	initial: { y: -5, opacity: 0 },
	enter: { y: 0, opacity: 1, transition },
	exit: { y: 5, opacity: 0, transition },
}
class ProjectFlutterPackage extends React.Component {
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
					<h1>Flutter Package</h1>
				</div>

				<div className='col-7'>
					<p>
						This a open Source package to get various animated screen time loading widgets which is been deployed in Pub.dev.
					</p>
					<a
						href='https://pub.dev/packages/flutter_loading_kit'
						alt='live-site'
						target='_blank'
						rel='noopener noreferrer'>
						<button>
							Live Site
							<img className='project-page-icons ' src={Arrow} alt='Arrow' />
						</button>
					</a>
					<a
						href='https://github.com/SanjayAS144/flutter_loading_kit'
						alt='github-repo'
						target='_blank'
						rel='noopener noreferrer'>
						<button>
							Github
							<img className='project-page-icons ' src={Arrow} alt='Arrow' />
						</button>
					</a>
				</div>

				<div style={{ paddingTop: '5em' }}>
					<ProjectLayout/>
				</div>
			</motion.div>
		)
	}
}

export default ProjectFlutterPackage
