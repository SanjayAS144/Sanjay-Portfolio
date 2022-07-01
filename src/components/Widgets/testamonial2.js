import React from 'react';
import LauraMemoji from '../Assets/Graphics/rentashoot.png';

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
				<h3>RENTASHOOT</h3>
				<h6 style={{ color: '#C9D4F9' }}> BENGALURU</h6>
				<p>
                The total process of working with Allen is smooth and simple, he brings out his ideas on table and the does exactly what he says. His ideology of a Minimalistic design is noteworthy.
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
				<h3>RENTASHOOT</h3>
				<h6 style={{ color: '#C9D4F9' }}>BENGALURU</h6>
				<p style={{ padding: '0em 2em' }}>
				The total process of working with Allen is smooth and simple, he brings out his ideas on table and the does exactly what he says. His ideology of a Minimalistic design is noteworthy.
				</p>
			</div>
		</div>
	)
}

export default testamonial1
