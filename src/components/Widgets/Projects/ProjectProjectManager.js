import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Exit from '../../Assets/Graphics/exit.svg';
import Arrow from '../../Assets/Graphics/arrow.svg'
import ProjectLayout from '../../Layouts/ProjectManagementProjectLayout';

// Import Imgs
import Digiseum2 from '../../Assets/Graphics/Digi-seum/pmp1.gif';
import Digiseum3 from '../../Assets/Graphics/Digi-seum/pmp3.png';
import Digiseum4 from '../../Assets/Graphics/Digi-seum/pmp2.gif';
import Digiseum5 from '../../Assets/Graphics/Digi-seum/pmp4.png';

const transition = { duration: 0.5, ease: 'easeInOut' }

const postVariants = {
	initial: { y: -5, opacity: 0 },
	enter: { y: 0, opacity: 1, transition },
	exit: { y: 5, opacity: 0, transition },
}
class ProjectProjectManager extends React.Component {
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
					<h1>Project Management System</h1>
				</div>

				<div className='col-7'>
					<p>
						It is a android application which provide a interface for college students to manage their project and to track the progress of their project.It also can notify about the project updates from the tachers and get the valuale feedback of the teachers. 
					</p>
					<a
						href='https://github.com/SanjayAS144/Project_Management_System'
						alt='live-site'
						target='_blank'
						rel='noopener noreferrer'>
						<button>
							Live Site
							<img className='project-page-icons ' src={Arrow} alt='Arrow' />
						</button>
					</a>
					<a
						href='https://github.com/SanjayAS144/Project_Management_System'
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
					<ProjectLayout
						key0={Digiseum2}
						key1={Digiseum3}
						key3={Digiseum4}
						key4={Digiseum5}
					/>
				</div>
			</motion.div>
		)
	}
}

export default ProjectProjectManager
