import React from 'react'
import digiseum1 from '../Assets/Projects/flutter_package.gif'
import Arrow from './../Assets/Graphics/arrow.svg'
import { Link } from 'react-router-dom'
class FlutterPackage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div className='digiseum-widget' style={{
				background:"#fff",		
			}}>
				<img src={digiseum1} alt='digi-seum-project' style={{
					width:"100%",
					height:"350px",
					marginLeft:"auto",
					marginRight:"auto",
					display:"block"
				}}/>
				<Link to='/flutter-package'>
					<button
						className='digiseum-widget-button'
						style={{
							position: 'absolute',
							bottom: '1.5em',
							left: '1.5em',
							padding: '.8em',
						}}>
						<img alt='arrow' src={Arrow} style={{ maxWidth: '1.8em' }} />
					</button>					
				</Link>

			</div>
		)
	}
}

export default FlutterPackage
