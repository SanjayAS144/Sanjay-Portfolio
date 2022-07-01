import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Exit from '../../Assets/Graphics/exit.svg'
import Arrow from '../../Assets/Graphics/arrow.svg'
import ProjectLayout from '../../Layouts/CalculatorProjectLayout';

// Import Images

const transition = { duration: 0.5, ease: 'easeInOut' }

const postVariants = {
	initial: { y: -5, opacity: 0 },
	enter: { y: 0, opacity: 1, transition },
	exit: { y: 5, opacity: 0, transition },
}
class ProjectCalculator extends React.Component {
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
					<h1>Neumorphic Calculator</h1>
				</div>

				<div className='col-7'>
					<p>
					Neumorphism is a contemporary approach to decorating Applications and creating a 3D effect on any web page or application page. 
					It is used to give an element a dark and light shadow on one side. The background appears to be tied to the neutral user interface elements as if they are extruded from or inset into it. Some have termed them “soft UI” because of how soft shadows are used to create the illusion, and the styling is almost three-dimensional.
					</p>
					<a
						href='https://github.com/SanjayAS144/neumorphic-calculator'
						target='_blank'
						rel='noopener noreferrer'
						alt='live-site'>
						<button>
							Live Site
							<img className='project-page-icons ' src={Arrow} alt='Arrow' />
						</button>
					</a>
					<a
						href='https://github.com/SanjayAS144/neumorphic-calculator'
						target='_blank'
						rel='noopener noreferrer'
						alt='github-repo'>
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

export default ProjectCalculator
