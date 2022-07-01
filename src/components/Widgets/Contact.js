import React from 'react';
import MailCutout from './../Assets/Graphics/mail-cutout-top.png'
import MailCutoutMobile from './../Assets/Graphics/mail-cutout-bottom.png'
import Arrow from './../Assets/Graphics/arrow.svg'
class Contact extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {

		return (
			<div
				style={{ backgroundColor: '#98D0FF' }}
				className='contact-widget row'>
				<div className='col-12 contact-widget-text'>
					<h3>Let's chat.</h3>
					<p>Currently interested fulltime opportunities.</p>
				</div>

				<div className='col-12 contact-widget-img'>
					{ ( this.props.layout === 'xxs' ) 
					? <img src={MailCutoutMobile} alt='mail-bottom' />
					:
					<img src={MailCutout} alt='Email Emoji' /> 
					}
				</div>

				<a
					href='mailto:sanjayas430@gmail.com'
					target='_blank'
					rel='noreferrer noopener'>
					<button
						className='contact-button'
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

export default Contact
