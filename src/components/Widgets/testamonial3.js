import React from 'react';
import LauraMemoji from '../Assets/Graphics/gilitz.png';

class testamonial1 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div>
				{ ( this.props.layout === 'xs' || this.props.layout === 'xxs' ) 
					?
					<SmallLayout />
					: 
					<LargeLayout />
					}
			</div>
		
		)
	}
}

function LargeLayout() {
	return (
		<div
			className='widget-bio row'
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
				padding: '1em',
			}}>
			<div
				style={{ alignItems: 'center', justifyContent: 'center' }}
				className='col-5'>
				<img
					src={LauraMemoji}
					alt='LauraMemoji'
					className='widget-bio-memoji'
					
				/>
			</div>

			<div
				style={{ alignItems: 'center', justifyContent: 'center' }}
				className='col-7'>
				<h3>GILITZ</h3>
				<h6 style={{ color: '#C9D4F9' }}> BENGALURU</h6>
				<p>
                To be honest i wasn't expecting such a good app, The UI and the functionality is top-notch and trust me this is the best app i could have ever got. This whole process was much of an hassle-free experience.
				</p>
			</div>
		</div>
	)
}

function SmallLayout() {
	return (
		<div
			className='widget-bio row'
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
				padding: '1em',
			}}>
			<img
				src={LauraMemoji}
				alt='LauraMemoji'
				className='widget-bio-memoji'
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					width: '24%',
					padding: '0',
				}}
			/>
			<div
				style={{
					justifyContent: 'center',
					textAlign: 'center',
					paddingTop: '1em',	
				}}
				className='col-12'>
				<h3>GILITZ</h3>
				<h6 style={{ color: '#C9D4F9' }}>BENGALURU</h6>
				<p style={{ padding: '0em 2em' }}>
				To be honest i wasn't expecting such a good app, The UI and the functionality is top-notch and trust me this is the best app i could have ever got. This whole process was much of an hassle-free experience.
				</p>
			</div>
		</div>
	)
}

export default testamonial1
