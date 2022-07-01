import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Exit from '../../Assets/Graphics/exit.svg';
import ProjectLayout from '../../Layouts/GreenGrabProject';

// Import Imgs
import gg2 from '../../Assets/Graphics/greengrab/gg2.png';
import gg3 from '../../Assets/Graphics/greengrab/gg1.png';
import gg4 from '../../Assets/Graphics/greengrab/gg3.gif';
import gg5 from '../../Assets/Graphics/greengrab/gg4.gif';

const transition = { duration: 0.5, ease: 'easeInOut' }

const postVariants = {
	initial: { y: -5, opacity: 0 },
	enter: { y: 0, opacity: 1, transition },
	exit: { y: 5, opacity: 0, transition },
}
class ProjectGreenGrab extends React.Component {
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
					<h1>Green Grab</h1>
				</div>
				<div className='col-7'>
					<p>
					Green Grab is the one stop appliation for all the basic needs like groceries, milk etc.
					Designing and developing market-ready applications
					using Flutter according to client requirements helped
					them make a profit of 10% more.
					
					</p>
					
				</div>

				<div style={{ paddingTop: '5em' }}>
					<ProjectLayout
						key0={gg2}
						key1={gg3}
						key3={gg4}
						key4={gg5}
					/>
				</div>
			</motion.div>
		)
	}
}

export default ProjectGreenGrab
