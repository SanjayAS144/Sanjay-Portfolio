import React from 'react';

// Link Icons
import linkedin from './../Assets/Graphics/linkedin-logo.png'
import Arrow from './../Assets/Graphics/arrow.svg'


class LinkedIn extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div style={{ backgroundColor: '#C9D4F9' }} className='link-widget'>
				<a
					href='https://www.linkedin.com/in/sanjay-as-sanju-024b6216b/'
					target='_blank'
					rel='noreferrer noopener'>
					<img className='link-widget-img' src={linkedin} alt='linkedin-logo' />
				</a>
				<a
					href='https://www.linkedin.com/in/sanjay-as-sanju-024b6216b/'
					target='_blank'
					rel='noreferrer noopener'>
					<button
						className='linkedin-button'
						onHover={this.handleTitle}
						style={{
							position: 'absolute',
							bottom: '1.5em',
							left: '1.5em',
							padding: '.8em',
						}}>
						<img alt='arrow' src={Arrow} style={{ width: '1.8em' }} />
					</button>
				</a>
			</div>
		)
	}
}

export default LinkedIn
