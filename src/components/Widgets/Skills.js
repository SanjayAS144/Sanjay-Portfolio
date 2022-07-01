import React from 'react';
import { motion } from 'framer-motion';
import ToolBelt from './../Assets/Graphics/toolbelt-cutout-bottom.png';
import ToolBeltMobile from './../Assets/Graphics/toolbelt-cutout-top.png';
class Skills extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			skillCategory:
				'Android Development, C++, Flutter Development, Python, C# , .NET, HTML, CSS, UI-UX DESIGNING, Node.js, Express.js', 
		}
	}

	handleFrontEnd = () => {
		this.setState({
			skillCategory:
				'Flutter, XML , Python, ReactJS, React Native, HTML, CSS, Bootstrap'
		})
	}

	handleBackEnd = () => {
		this.setState({
			skillCategory:
				'Node.js, Express, MySQL, Django, PostgreSQL, MongoDB, Mongoose, Heroku, REST API'
		})
	}
	handleOther = () => {
		this.setState({
			skillCategory:
				'Git, Adobe Creative Suite, Figma, Sketch, Notion, Postman, Heroku, Netlify'
		})
	}

	render() {
		const { skillCategory } = this.state

		return (
			<div className='skills-widget'>
				<h3>Tool Belt</h3>
				<div>
					<button onTap={this.handleFrontEnd} onClick={this.handleFrontEnd}>
						Front-End
					</button>
					<button onTap={this.handleBackEnd} onClick={this.handleBackEnd}>
						Back-End
					</button>
					<button onTap={this.handleOther} onClick={this.handleOther}>
						Other
					</button>
				</div>

				<motion.div>
					<p>{skillCategory}</p>
				</motion.div>

				{this.props.layout === 'xxs' ? (
					<img
						className='skills-widget-img-mobile'
						src={ToolBeltMobile}
						alt='Hammer Emoji'
					/>
				) : (
					<img
						className='skills-widget-img'
						src={ToolBelt}
						alt='Hammer Emoji'
					/>
				)}
			</div>
		)
	}
}

export default Skills
